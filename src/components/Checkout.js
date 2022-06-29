import React from 'react'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { contexto } from "./CartContext"

function Checkout() {

  const { carrito, agregarProducto, isInCart, eliminarProducto, actualizarCantidad, vaciarCarrito, cartLenght, getTotal } = useContext(contexto)


  const [buyer, setBuyer] = useState({
    name: "",
    surname: "",
    telephone: "",
    email: "",
    emailConfirm: "",
  })
  const handleSubmitChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value })

    console.log(buyer)
  }

  return (
    <>
            <h2>Complete con sus datos para finalizar la compra</h2>            
            <form className="space-y-6">
            <input id="name" type="text" name="name" required onChange={handleSubmitChange} placeholder="Nombre" />
            <input id="surname" type="text" name="surname" required onChange={handleSubmitChange} placeholder="Apellido" />
            <input id="telephone" type="tel" name="telephone" required onChange={handleSubmitChange} placeholder="Teléfono" />
            <input id="email" type="email" name="email" required onChange={handleSubmitChange} placeholder="E-mail" />
            <input id="emailConfirm" type="email" name="emailConfirm" required onChange={handleSubmitChange} placeholder="Confirmar e-mail" />
            <button>Comprar</button>
            <div>
            <Link to='/'>seguir comprando</Link>
            </div>
          </form>
    </>
  );
}

export default Checkout