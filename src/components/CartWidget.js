import React from "react"
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { contexto } from "./CartContext"

const CartWidget = () => {
        const {cartLenght} = useContext(contexto)
        //resultado.agregarProducto()
        return (
                <>
                        
                        <NavLink to="/cart"><span className="material-symbols-outlined">shopping_cart</span> {0}</NavLink>
                </>

        )
}

export default CartWidget
