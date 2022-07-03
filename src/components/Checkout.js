import React from 'react'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { contexto } from "./CartContext"
import { addOrder } from "../config/firebase" 
import { db, collectionProductos} from '../config/firebase';
import { addDoc, collection, serverTimestamp, doc, getDoc } from 'firebase/firestore';

function Checkout() {
  
  const { carrito, agregarProducto, isInCart, eliminarProducto, actualizarCantidad, vaciarCarrito, cartLenght, getTotal,  } = useContext(contexto)

  const [idCompra, setIdCompra] = useState("")
  const [showModal, setShowModal] = useState(false)
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

    console.log(buyer)
  } 
  
  function orderHandler() {
    /*const formatedCart = carrito.map((prod) => {
      return {
          cantidad: prod.cantidad,
          item: prod.title,
          id: prod.id,
      };
  })*/
    const order = {
        buyer,
        item: carrito,
        price: getTotal(),
        date: orderDate,
    }
    addOrder(order).then(data => {
        setIdCompra(data)
        vaciarCarrito()
        console.log(order)
        console.log(carrito)
    }) 
}
if(idCompra !== ''){
  return (
    <div>
      <h2 >¡Muchas gracias por tu compra {(buyer.name).toUpperCase()}!</h2>
      <p>Te enviamos un mail a {(buyer.email).toLowerCase()} con tu orden de compra ID: {idCompra}. Esperamos que hayas tenido una agradable experiencia. ¡Hasta la próxima!</p>              
    </div>)
}

  return (
    <>
    <div>
    <Link to='/'><button>seguir comprando</button></Link>
    </div>
            <div>
              <p>Cantidad de items en total:{cartLenght()}</p>  
            </div> 
            <div>
              <p>Importe Total: ${parseFloat(getTotal())}</p>
            </div>
            <Link to="/"> <button onClick={vaciarCarrito}>Vaciar carro y Volver al inicio</button></Link>
            <h2>Complete con sus datos para finalizar la compra</h2>            
            <form className="space-y-6">
            <div><input id="name" type="text" name="name"  required onChange={handleSubmitChange} placeholder="Nombre" /></div>
            <div><input id="surname" type="text" name="surname"  required onChange={handleSubmitChange} placeholder="Apellido" /></div>
            <div><input id="telephone" type="tel" name="telephone"  required onChange={handleSubmitChange} placeholder="Teléfono" /></div>
            <div><input id="email" type="email" name="email"  required onChange={handleSubmitChange} placeholder="E-mail" /></div>
            <div><input id="emailConfirm" type="email" name="emailConfirm"  required onChange={handleSubmitChange} placeholder="Confirmar e-mail" /></div>   
            </form>
            {buyer.name && buyer.surname && buyer.telephone && (buyer.email === buyer.emailConfirm)? (
              // Botón habilitado
            <input onClick={() => { orderHandler(); setShowModal(true) }}  type="submit" value="Proceder al pago"/>
            ) : (
            // Botón deshabilitado
            <input type="submit" value="Proceder al pago" disabled />)}
        
    </>
  );
}

export default Checkout