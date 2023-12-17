import { useParams } from "react-router-dom";
import { getProductByIdRequest } from "../../http/postRequests";
import { useEffect, useState } from "react";
import './Product.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductByIdRequest(id)
      .then((res) => {
        setProduct(res.data);
      })
      .finally(() => setLoading(false));
  }, [id]);

  console.log("loading", loading);

  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // const currentProduct = products.find(item => item.title === id)
  return (
    <div className="container">
      {/* {id} */}
      {loading ? (
        <span className="loader"></span>
      ) : (
        <div>
          <div className="mainInfo">
            <div
              className="slider"
              style={{ width: "50%", marginBottom: "40px" }}
            >
              <Slider {...settings}>
                {product.images.map((url, index) => (
                  <div key={index} className="imageWrapper">
                    <img src={url} alt="" height={300} />
                  </div>
                ))}
              </Slider>
            </div>

            <div>
              <h1> Name: {product.title}</h1>
              <p>Price: {product.price}$</p>
              <p>Brand: {product.brand}</p>
              <p>In stock: {product.stock}</p>

            </div>
          </div>
          <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, repellat mollitia! Cumque illum ipsum neque omnis doloremque similique fuga atque soluta, quas asperiores. Voluptas cumque, amet aliquam esse minima nam nesciunt rerum magnam quo facere reprehenderit in ipsa cum doloribus sequi neque error voluptatem corrupti, unde quia, ut exercitationem illo! {product.description}</p>
        </div>
      )}
    </div>
  );
}
