import React from 'react'
import {useState, useContext} from 'react'
import ItemCount from './ItemCount'
import {Link} from 'react-router-dom';
import {contexto} from './CartContext';



const ItemDetail = ({item}) => {

  const {agregarProducto} = useContext(contexto)


  const [confirm, setConfirm] = useState(true)

  const onAdd = (cantidadSeleccionada) =>{    
    if (cantidadSeleccionada >= 1){       
      agregarProducto (item, cantidadSeleccionada)
      setConfirm(false);
    } else {
      return null;
  }
  }

  return (
    <div className='detail--border'>
    <div className='item--detail'>
      <img src={item.image} alt={item.title} width="400"/>
    <div>        
        <h1 className='item--title'>{item.title}</h1>  
        <h6>{item.category}</h6>
        <h4 className='item--description'>{item.description}</h4>    
        <h4 className='item--precio'>${item.price}.-</h4>
      </div>  
      </div>  
      <div className='cardContador'>   
      {confirm ? <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>: <div><div className='itemdetail--botones'><Link to='/'><button className='btnconf'>Continuar comprando</button></Link></div><div className='itemdetail--botones'><Link to={`/cart`}><button className='btnconf'>Finalizar Compra</button></Link></div></div> }        
      </div>      
      
      </div>
      
    )
}



export default ItemDetail