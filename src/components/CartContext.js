import { createContext, useState } from "react"


export const contexto = createContext()
export const Provider = contexto.Provider
export const MiProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])  
    
    const agregarProducto = (producto, cantidad) => {
        if(isInCart(producto.id)){
            let copia = carrito.findIndex((copia) => (copia.id === producto.id))
            let nuevo_producto = [...carrito]
            nuevo_producto[copia].cantidad += cantidad
            setCarrito(nuevo_producto)            
        } else {
            const itemToAdd = {...producto, cantidad}
            setCarrito([...carrito, itemToAdd])
        }
        
    }

const isInCart = (id) => {
    return carrito.some((item) => (item.id === id))
}

    const eliminarProducto = (id) => {
        setCarrito (carrito.filter((item) => (item.id !== id)))
    }

    const vaciarCarrito = () => { 
        setCarrito ([])
    }

    const cartLenght = () => {
        let quantity = 0
        carrito.forEach((item) => {
            quantity = quantity + item.cantidad
        })
        return quantity
        
    }

const getSubtotal = (price, cantidad) => {
    let subtotal = 0
    subtotal = subtotal + (price * cantidad)
    return Number(subtotal)
}

    const getTotal = () => {
    let total = 0
    carrito.forEach((item) => {
        total = total + (item.cantidad * item.price)
    })
    return Number(total)
}    
    return (
        <Provider value={{carrito, agregarProducto, isInCart, eliminarProducto,  vaciarCarrito, cartLenght, getSubtotal, getTotal }}>
            {children}
        </Provider>
    )
}