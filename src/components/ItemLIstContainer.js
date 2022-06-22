import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {customFetch, getProductosByCategory} from '../utils/customFetch'
import ItemList from './ItemList'
import {useParams} from "react-router-dom"
import { ProductLoader } from './ProductLoader'


function ItemListContainer() {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    useEffect(() => {    
        setLoading(true)    
        if(!id) {
        customFetch()
        .then(response => {
            setItems(response)
            setLoading(false)
            })
        } else {
            getProductosByCategory(id)
            .then(response => {
            setItems(response)
            setLoading(false)
            })
        }
        
    }, [id])
    return (
    <div>
    {loading ? <ProductLoader/> : <ItemList products={items}/>}
    </div>
)
}

export default ItemListContainer
