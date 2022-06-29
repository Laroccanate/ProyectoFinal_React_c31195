import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { customFetch, getProductosByCategory } from '../utils/customFetch'
import ItemList from './ItemList'
import { useParams } from "react-router-dom"
import { ProductLoader } from './ProductLoader'
import { db } from '../config/firebase';
import { getDocs, collection } from 'firebase/firestore';
//getDocs: DOCUMENTOS
//getDoc: ID
//doc: documento de coleccion
//query: filtro
//where:filtro
//collection:


function ItemListContainer() {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        const collectionProductos = collection(db, "productos")
        const consulta = getDocs (collectionProductos)

        consulta
            .then((resultado)=>{
                console.log(resultado.docs)
                const productos_mapeados = resultado.docs.map(referencia=>{
                    //console.log(referencia.id)
                    //console.log(referencia.data())//json//

                    // sumarle el id a la info del objeto
                    const aux = referencia.data()
                    aux.id = referencia.id
                    return aux
                }
                    )
                    setItems(productos_mapeados)
                    setLoading(false)
            })
            .catch((error) => {
                console.log(error)
            })
        
    /*
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
    */
    }, [id])

return (
    <div>
        {loading ? <ProductLoader /> : <ItemList products={items} />}
    </div>
    )
}

export default ItemListContainer
