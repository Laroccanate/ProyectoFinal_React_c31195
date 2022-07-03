import React from 'react'
import {Link} from "react-router-dom"

function Item({id, title, description, price, image, stock}) {
  return (
    <div className="item">
        <h2>{title}</h2>   
        <img src={image} alt={id}/>
        <h6>${price}.-</h6>
        <Link to={`/item/${id}`}>Detalle del producto</Link>
        
    </div>
  ) 
}

export default Item