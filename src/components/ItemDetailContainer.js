import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail';
import {getProductosById} from '../utils/customFetch'
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
    const [item, setProduct] = useState({});
    const {id} = useParams()

    useEffect(()=>{
      getProductosById(parseInt(id))
        .then(response => {setProduct(response)})
        .catch((error) => console.log(error))
    }, [])

    //console.log(item)
  return (
    <ItemDetail item={item}/>)
}




export default ItemDetailContainer

