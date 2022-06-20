import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {customFetch, getProductosByCategory} from '../utils/customFetch'
import ItemList from './ItemList'
import {useParams} from "react-router-dom"


function ItemListContainer() {
    const [items, setItems] = useState([])

    const {id} = useParams()

    useEffect(() => {
        if(!id) {
        customFetch()
        .then(response => {
            setItems(response)
            })
        } else {
            getProductosByCategory(id)
            .then(response => {
            setItems(response)
            })
        }
    }, [id])
    return (
    <div>
        <ItemList products={items}/>        
    </div>
)
}

export default ItemListContainer
