import { createContext, useState } from "react"


export const contexto = createContext()
export const Provider = contexto.Provider
export const MiProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])

    const [cantidad_total, setCantidadTotal] = useState(0)

    const [precio_total, setPrecioTotal] = useState(0)

    const agregarProducto = (producto, cantidad) => {
        const copia = [...carrito]
        
        const nuevo_producto = {...producto, cantidad : cantidad}
        copia.push(nuevo_producto)        
        setCarrito(copia)
    }

    const eliminarProducto = (producto) => {
        //setCarrito()
    }
    
    const actualizarCantidad = (producto, cantidad) => {
        //setCarrito()
    }

    const vaciarCarrito = () => {}

    const valorDelContexto = {
        carrito : carrito,
        cantidad_total : cantidad_total,
        precio_total : precio_total,
        agregarProducto : agregarProducto,
    }


    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}




/*
import { useState } from 'react';
import { createContext } from 'react';
import { useContext } from 'react';


export const contexto = createContext() 
export const Provider = contexto.Provider

export const MiProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);
    const [cantidad_total, setCantidadTotal] = useState(0);
    const [precio_total, setPrecioTotal] = useState(0);


    function comprobarDuplicado(producto,array){
        const add = false
        for(let product in array){
            if(product.id === producto.id){
                product.cantidad = product.cantidad + product.cantidad
            }else{
                add = true
            }
        }
        add ? array.push(producto) : console.log ("Se suma cantidad")
        return array;
    }


    const addProducto = (producto, cantidad) => {
        console.log("En el carro"+{carrito})
        const car = carrito
        const carro = []
        carro = carrito
        carro = comprobarDuplicado(producto, carro, cantidad);
        setCarrito(carro)
    }
    const deleteProducto = (producto) => {
        //setCarrito()
    }
    const actualizarCantidad = (producto) => {
        //setCarrito()
    }

    const updateContador = () => {
        setCantidadTotal(carrito.length)
    }

    const valorDelContexto ={
        carrito: carrito,
        precio_total: precio_total,
        cantidad_total: cantidad_total,
        addProducto: addProducto,
        updateContador:updateContador,
        deleteProducto: deleteProducto,
        actualizarCantidad: actualizarCantidad,
        
    }

    return(
        <Provider value={global}>
            {children}
        </Provider>
    )
}
*/

/*
import { createContext, useState } from "react"

export const contexto = createContext()

export const Provider = contexto.Provider

export const MiProvider = ({children}) => {

    const [cartItems, setCartItems] = useState([])

    // Agregar un item al carrito
    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            let index = cartItems.findIndex((index) => (index.id == item.id))
            let copyCart = [...cartItems]
            copyCart[index].quantity += quantity
            setCartItems(copyCart)
        } else {
            const itemToAdd = { ...item, quantity }
            setCartItems([...cartItems, itemToAdd])
        }
    }

    // Checkear si el item ya se encuentra en el carrito
    const isInCart = (id) => {
        return cartItems.some((item) => (item.id == id))
    }

    // Remover un item del carrito
    const removeItem = (id) => {
        setCartItems(cartItems.filter((item) => (item.id !== id)))
    }

    // Limpiar el carrito
    const clearCart = () => {
        setCartItems([])
    }

    // Obtener número total de items
    const cartLenght = () => {
        let quantity = 0
        cartItems.forEach((item) => {
            quantity = quantity + item.quantity
        })
        return quantity
    }

    // Obtener el subtotal
    const getSubtotal = (price, quantity) => {
        let subtotal = 0
        subtotal = subtotal + (price * quantity)
        return Number(subtotal)
    }

    // Obtener el total
    const getTotal = () => {
        let total = 0
        cartItems.forEach((item) => {
            total = total + (item.quantity * item.price)
        })
        return Number(total)
    }

    return (
        <contexto.Provider
            value={{
                cartItems,
                addItem,
                removeItem,
                clearCart,
                cartLenght,
                getSubtotal,
                getTotal
            }}
        >
            {children}
        </contexto.Provider>
    )
}
*/