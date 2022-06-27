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