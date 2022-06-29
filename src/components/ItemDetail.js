import React from 'react'
import {useState, useContext} from 'react'
import ItemCount from './ItemCount'
import {Link} from 'react-router-dom';
import {contexto} from './CartContext';



const ItemDetail = ({item}) => {

  const {carrito, agregarProducto} = useContext(contexto)


  const [confirm, setConfirm] = useState(true)

  const onAdd = (cantidadSeleccionada) =>{    
    if (cantidadSeleccionada >= 1){
      console.log(cantidadSeleccionada);
      agregarProducto (item, cantidadSeleccionada)
      setConfirm(false);
    } else {
      return null;
  }
  }

  return (
    
    <div className='item--detail'>
      <img src={item.image} alt={item.title} width="400"/>
      <div>
        <h1>{item.title}</h1>
        <h2>Id:{item.id}</h2>
        <h3>Stock:{item.stock}</h3>
        <h4>{item.description}</h4>
        <h4>{item.category}</h4>
        <h4>${item.price}.-</h4>
      </div>       
      {confirm ? <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>: <div><div><Link to={`/cart`}>Finalizar Compra</Link></div> <div><Link to='/'>Continuar comprando</Link></div></div> }        
      </div>
      
    )
}



export default ItemDetail