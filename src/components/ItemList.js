import React from 'react'
import Item from './Item'

function ItemList({products}) {
  return (
    <div className='item--list'>
      {products.map(p =>
        <Item
        id={p.id}
        title={p.title}
        image={p.image}
        description={p.description}
        category={p.category}
        price={p.price}
        key={p.id}
        stock={p.stock}
        />
        )
      }
    </div>
  )
}

export default ItemList