import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {customFetch, getProductosByCategory} from '../utils/customFetch'
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
