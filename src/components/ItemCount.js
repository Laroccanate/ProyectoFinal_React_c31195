import React from 'react'
import { useState } from 'react'

function ItemCount({stock, onAdd}) {
    
    const [count, setCount] = useState(0)
    function adding(){
        if (count < stock){
            setCount(count+1)
        }
    }
    function subs(){
        if (count > 0) 
        setCount (count-1)
    }
    const confirmarContador = (e) => {
        onAdd(count)
    
    }

  return (
    <div className='itemcount cardContador'>
        <button className='itemcount--btn' onClick= {subs}> - </button>
        <span>{count}</span>
        <button className='itemcount--btn' onClick={adding}> + </button>        
        <button className='btnconf' onClick={confirmarContador}>Agregar a mi compra</button>
    </div>
  )
}

export default ItemCount
