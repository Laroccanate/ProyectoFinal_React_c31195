
import React, {useState, useEffect} from 'react'
import productos, {traerProducto} from '../utils/productos'
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    useEffect(()=>{
        traerProducto ()
        .then(resultado => setItem(resultado))
        .catch((error) => console.log(error))
    }, [])

    console.log(item)
  return (
    <ItemDetail item={item}/>)
}



export default ItemDetailContainer
