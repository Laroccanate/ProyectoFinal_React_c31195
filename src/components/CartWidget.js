import React from "react"
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { contexto } from "./CartContext"

const CartWidget = () => {
        const resultado = useContext(contexto)
        //resultado.agregarProducto()
        return (
                <>
                        <span className="material-symbols-outlined">shopping_cart</span>
                        <NavLink to="/carrito">carrito {resultado.cantidad_total}</NavLink>
                </>

        )
}

export default CartWidget
