import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { contexto } from "./CartContext"


function Cart() {

  const {carrito} = useContext(contexto)
  return (
    <div>
      {carrito.map((product) =>(
      <div key={product.producto}>
        <img src={product.image} alt={product.title} width="400"/>
        <h1>{product.title}</h1>
        <h2>Id:{product.id}</h2>
        <h3>Stock:{product.stock}</h3> 
        <h4>${product.price}.-</h4>
        <p className='text14d'>Cantidad total:{product.cantidad}</p>
        </div> 
      )
      
      )}
        <Link to="/checkout">Finalizar la Compra</Link>
    </div>
  )
}

export default Cart
