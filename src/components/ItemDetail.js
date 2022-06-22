import React from 'react'
import {useState} from 'react'
import ItemCount from './ItemCount'
import {Link} from 'react-router-dom';


const ItemDetail = ({item}) => {
  const [confirm, setConfirm] = useState(true)

  const onAdd = (cantidadSeleccionada) =>{
    if (cantidadSeleccionada >= 1){
      console.log("Product added!");
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
      {confirm ? <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>: <div className="view-cart-container"><Link to={`/cart`} className="view-cart">Go to Cart</Link></div>}      
      </div>
      
    )
}



export default ItemDetail