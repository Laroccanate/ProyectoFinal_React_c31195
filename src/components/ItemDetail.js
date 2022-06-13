import React from 'react'
import ItemCount from './ItemCount'

export const ItemDetail = ({item}) => {
  return (
    <div className='detail'>
      <img src={item.image} alt={item.name} width="400"/>
      <div>
        <h1>{item.name}</h1>
        <h3>Stock:{item.stock}</h3>
        <h4>{item.description}</h4>
      </div>
      <ItemCount stock={item.stock} initial={1}/>
    </div>
  )
}



export default ItemDetail