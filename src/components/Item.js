import React from 'react'
import ItemCount from './ItemCount'
import {Link} from "react-router-dom"

function Item({id, title, description, price, image, stock}) {
  return (
    <div className="item">
        <h2>{title}</h2>   
        <img src={image} alt={id}/>
        <h6>${price}.-</h6>
        <Link to={`/detail/${id}`}>Detalle del producto</Link>
        <ItemCount stock={stock}/>
    </div>
  )
}

export default Item


/*
import React from 'react'
import ItemCount from './ItemCount'

function Item({id, name, image, stock}) {
  return (
    <div>
        <h1>{name}</h1>
        <img src={image} alt={id}/>
        <ItemCount stock={stock}/>
    </div>
  )
}

export default Item
*/