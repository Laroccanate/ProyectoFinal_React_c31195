import React from 'react'
import { Link } from 'react-router-dom'

function Carrito() {
  return (
    <div>
        <h1>Carrito</h1>
        <Link to="/checkout">Finalizar la Compra</Link>
    </div>
  )
}

export default Carrito
