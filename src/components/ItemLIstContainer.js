import React from 'react'
import { useEffect, setProduct } from 'react'
import { useState } from 'react'
import {customFetch, getProductosByCategory} from '../utils/customFetch'
import productos from '../utils/productos'
import ItemList from './ItemList'
import {useParams} from "react-router-dom"


function ItemListContainer() {
    const [items, setItems] = useState([])

    const {categoryId} = useParams()

    useEffect(() => {
        if(!categoryId) {
        customFetch()
        .then(response => {
            setItems(response)
            })
        } else {
            getProductosByCategory(categoryId)
            .then(response => {
            setItems(response)
            })
        }
    }, [categoryId])
    return (
    <div>
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