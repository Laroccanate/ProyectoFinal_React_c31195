import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ItemList from './ItemList'
import { useParams } from "react-router-dom"
import { ProductLoader } from './ProductLoader'
import { db} from '../config/firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';


function ItemListContainer() {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {        
        
        const myItems = categoryId
        ? query (collection(db, "productos"), where ("category", "==", categoryId) )
        : collection(db, "productos")        
        
        const consulta = getDocs (myItems)
        consulta
            .then((resultado)=>{                
                const productos_mapeados = resultado.docs.map(referencia=>{
                    
                    const aux = referencia.data()
                    aux.id = referencia.id 
                    return aux
                }
                    )
                    setItems(productos_mapeados)
                    setLoading(false)
            })               
    
    }, [categoryId])

return (
    <div>
        {loading ? <ProductLoader /> : <ItemList products={items} />}
    </div>
    )
}

export default ItemListContainer
