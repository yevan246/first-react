import { NavLink } from 'react-router-dom'
import styles from './ProductItem.module.css'
import { useState } from "react"

export default function ProductItem({ id, img, title, price, stock, description }) {
  const [click, setClick] = useState(false)

  return (
    <div className={styles.productItemContainer}>
        <img src={img} alt={title} />
        <h1>{title}</h1>
        <h3>In Stock: {stock}</h3>
        <div>Description: {description}</div>


        <button onClick={() => {setClick(!click)}}>{click ? 'hide price' : 'show price'}</button>
        {click && (<h3>{price}</h3>)}
        <div>
          <NavLink to={`/product/${id}`}>Show more</NavLink>
        </div>
    </div>
  )
}
