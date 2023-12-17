import { useEffect, useState } from "react";
import ProductItem from "../../components/ProductItem/ProductItem";
import { getProductsRequest } from "../../http/postRequests";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    const limit = 20;
    const skip = (page - 1) * limit

    getProductsRequest({skip, limit})
      .then((res) => {
        setProducts(res.data.products);
        setTotalPages(Math.ceil(res.data.total / limit))

      })
      .finally(() => setLoading(false));
  }, [page]);

  return (
    <div>
      {loading ? (
        <span className="loader"></span>
      ) : (
        <>
        <div className="divBlock">
          {products.map((item) => (
            <ProductItem
              key={item.title}
              img={item.thumbnail}
              title={item.title}
              price={item.price}
              stock={item.stock}
              description={item.description}
              id={item.id}
            />
          ))}
        </div>
        <div className="pagination">
          {page}
        {new Array(totalPages).fill(0).map( (_, index) => (
          <button key={index} onClick={() => setPage(index + 1)}>
            {index + 1}
          </button>
        ))}

        </div>

        </>
      )}
    </div>
  );
}
