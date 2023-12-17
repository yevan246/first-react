
import './Post.css'

export default function Post({post}) {

  return (
    <div className='post_item'>
        <div className="title">{post.title}</div>
        <div className="body">{post.body}</div>
         <div className="tags">{post.tags.join(' ')}</div>

    </div>
  )
}
