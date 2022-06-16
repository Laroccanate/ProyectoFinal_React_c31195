import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {
  return (
    <div className='detail'>
      <img src={item.image} alt={item.title} width="400"/>
      <div>
        <h1>{item.title}</h1>
        <h2>{item.id}</h2>
        <h3>Stock:{item.stock}</h3>
        <h4>{item.description}</h4>
        <h4>{item.category}</h4>
        <h4>${item.price}.-</h4>
      </div>
      <ItemCount stock={item.stock} initial={1}/>
    </div>
  )
}



export default ItemDetail