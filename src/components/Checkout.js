import React from 'react'
import { useContext, useState } from 'react'
import { contexto } from "./CartContext"
import { addOrder } from "../config/firebase"
import { Link } from 'react-router-dom'


function Checkout() {

  const { carrito, vaciarCarrito, getTotal } = useContext(contexto)

  const [idCompra, setIdCompra] = useState("")
  const [ setShowModal] = useState(false)
  const [buyer, setBuyer] = useState({
    name: "",
    surname: "",
    telephone: "",
    email: "",
    emailConfirm: "",
  })

  const orderDate = new Date().toLocaleDateString()

  const handleSubmitChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value })
  }
  function orderHandler() {

    const order = {
      buyer,
      item: carrito,
      price: getTotal(),
      date: orderDate,
    }
    addOrder(order).then(data => {
      setIdCompra(data)
      vaciarCarrito()
    })
  }
  if (idCompra !== '') {
    return (
      <div className='page page__in page__center'>
        <h2 >¡Muchas gracias por tu compra {(buyer.name).toUpperCase()}!</h2>
        <p>Te enviamos un mail a {(buyer.email).toLowerCase()}</p>
        <p> Con tu orden de compra ID: {idCompra}. </p> 
        <p> ¡Hasta la próxima!</p>
        <Link to='/'><button className='btnconf'>volver al inicio</button></Link>
      </div>)
  }

  return (
    <>

      <div className='page page__in page__center'>
        <h2>Complete con sus datos para finalizar la compra</h2>
        <form className="space-y-6">
          <div><input id="name" type="text" name="name" required onChange={handleSubmitChange} placeholder="Nombre" /></div>
          <div><input id="surname" type="text" name="surname" required onChange={handleSubmitChange} placeholder="Apellido" /></div>
          <div><input id="telephone" type="tel" name="telephone" required onChange={handleSubmitChange} placeholder="Teléfono" /></div>
          <div><input id="email" type="email" name="email" required onChange={handleSubmitChange} placeholder="E-mail" /></div>
          <div><input id="emailConfirm" type="email" name="emailConfirm" required onChange={handleSubmitChange} placeholder="Confirmar e-mail" /></div>
        </form>
        {buyer.name && buyer.surname && buyer.telephone && buyer.email && buyer.emailConfirm && (buyer.email === buyer.emailConfirm) ? (
          <input onClick={() => { orderHandler(); setShowModal(true) }} type="submit" value="Proceder al pago" />

        ) : (

          <input className='btnconf' type="submit" value="Proceder al pago" disabled />)

        }
      </div>
    </>
  );
}

export default Checkout