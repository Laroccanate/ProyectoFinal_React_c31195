import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import {collectionProductos} from '../config/firebase';
import { doc, getDoc} from 'firebase/firestore';


const ItemDetailContainer = () => {
    const [item, setProduct] = useState({});
    const {id} = useParams()

    useEffect(()=>{
      const myItems = doc(collectionProductos, id)
      getDoc(myItems).then((response)=>{
        setProduct({
          id: response.id, 
          ...response.data(),
        });
      });
    },
    [id]);
    return(
      <ItemDetail item={item}/>)
  }






export default ItemDetailContainer

