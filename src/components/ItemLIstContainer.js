import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import customFetch from '../utils/customFetch'
import productos from '../utils/productos'
import ItemList from './ItemList'
import style from './ItemListContainer.module.css'

function ItemListContainer() {
    const [items, setItems] = useState([])

    useEffect(()=>{
        customFetch(2000, productos)
        .then(resultado => setItems(resultado))
    }, [items])
    
  return (
    <div className={style.container}>
        <ItemList products={items}/>
    </div>
  )
}

export default ItemListContainer



/*
import { useEffect, useState } from "react"
import ItemCount from "./ItemCount"


const ItemListContainer = ({respuesta}) => {    
    const [items, setItems] = useState([])

    useEffect(()=>{
        const MocAsync = new Promise ((res)=>{
            setTimeout(()=>{
                console.log("pidiendo productos...")
                const productosDB = ["Producto 1", "Producto 2", "Producto 3"]
                res(productosDB)
                },2000)
            })
            MocAsync.then(productos=>{
                setItems(productos)
            })
        },[])
        const onAdd = () =>{}

    if(items.length > 0){
        return(
            <>
            <h2 className="d-flex justify-content-center">{respuesta}</h2>
            <ItemCount stock={5} onAdd={onAdd} initial={0}/>
            </>
    )}else{
        return(
            <>
            <h2 className="d-flex justify-content-center">{respuesta}</h2>
            <p>Cargando...</p>
            </>
        )
    }
}

export default ItemListContainer
*/