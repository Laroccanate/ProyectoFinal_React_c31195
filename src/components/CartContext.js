import { createContext, useState } from "react"

// Contexto del carrito
export const contexto = createContext()

// Provider del carrito
export const Provider = contexto.Provider
export const MiProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    //const [cantidad_total, setCantidadTotal] = useState(0)
    //const [precio_total, setPrecioTotal] = useState(0)

    // Agregar un item al carrito
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
        /*const copia = [...carrito]
        const nuevo_producto = { ...producto, cantidad: cantidad }
        copia.push(nuevo_producto)
        setCarrito(copia)*/
    }
// Verifica si el producto ya fue agrgado al Cart
const isInCart = (id) => {
    return carrito.some((item) => (item.id === id))
}


// Eliminar un item del carrito
    const eliminarProducto = (id) => {
        setCarrito (carrito.filter((item) => (item.id !== id)))
    }

    
    /*const actualizarCantidad = (producto, cantidad) => {
        //setCarrito()
    }*/


// Vaciar el carrito por completo
    const vaciarCarrito = () => { 
        setCarrito ([])
    }


    // Obtener número total de items
    const cartLenght = () => {
        let quantity = 0
        carrito.forEach((item) => {
            quantity = quantity + item.cantidad
        })
        return quantity
        console.log(quantity)
    }

// Obtener el subtotal
const getSubtotal = (price, cantidad) => {
    let subtotal = 0
    subtotal = subtotal + (price * cantidad)
    return Number(subtotal)
}

// Obtener el total
    const getTotal = () => {
    let total = 0
    carrito.forEach((item) => {
        total = total + (item.cantidad * item.price)
    })
    return Number(total)
}

    /*const valorDelContexto = {
        carrito: carrito,
        cantidad_total: cantidad_total,
        precio_total: precio_total,
        agregarProducto: agregarProducto,
    }*/

    return (
        <Provider value={{carrito, agregarProducto, isInCart, eliminarProducto,  vaciarCarrito, cartLenght, getSubtotal, getTotal }}>
            {children}
        </Provider>
    )
}