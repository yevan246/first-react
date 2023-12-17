import { useState } from "react";
import { useEffect } from "react";
import { getPostsRequest, searchPostsRequest } from "../../http/postRequests";
import Post from "../../components/Post/Post";
import "./Posts.css";


export default function Posts() {
  const [searchValue, setSearchValue]  = useState('')
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [serverError, setServerError] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [type, setType] = useState('show') // show or search


  const limit = 5;

  useEffect(() => {
    //   fetch('https://dummyjson.com/posts123')
    //     .then(async data => {
    //         if(!data.ok) {
    //             const text = await data.text()
    //             throw new Error(text)
    //         }
    //         return data.json()
    //     })
    //     .then(data => {
    //         setPosts(data.posts)
    //     }).catch((e) => {
    //         setServerError(e.message)
    //     }).finally(() => {
    //         setLoading(false)
    //     })

    const skip = (page - 1) * limit;
    let request = null

    if(type === 'search') {
      request = searchPostsRequest({q: searchValue, skip, limit})
    } else {
      request = getPostsRequest({ skip, limit })
    }
    
    request
      .then((res) => {
        setPosts(res.data.posts);
        setTotalPages(Math.ceil(res.data.total / limit));
        window.scrollTo(0, 0);
      })
      .catch((e) => {
        setServerError(e.response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page, type]);


  const handleSearch = (e) => {
    e.preventDefault()

    setPage(1)
    if(searchValue) {
      setType('search')
    } else {
      setType('show')
    }
  }

  return (
    <div>
      <h3>Posts</h3>
      <form onSubmit={handleSearch}>
          <input type="text" onChange={(e) => setSearchValue(e.target.value)} />
          <button>search</button>
        </form>

      {serverError && (<div style={{color: 'red'}}>{serverError}</div>)}

      {loading ? (
        <span className="loader"></span>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              gap: "30px",
              flexDirection: "column",
              marginTop: "20px",
            }}
          >
            {posts.map((item) => (
              <Post key={item.id} post={item} />
            ))}
          </div>

          <div className="pagination">
            {new Array(totalPages).fill(0).map((_, index) => (
              <button
                onClick={() => setPage(index + 1)}
                key={index}
                className={page === index + 1 ? 'active' : ''}
              >
                {index + 1}
                {/* {page === index + 1 ? 'ok' : 'no'} */}
              </button> 
            ))}
          </div>
        </>
      )}
    </div>
  );
}
