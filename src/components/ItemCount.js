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
    <div>
        <button onClick= {subs}> - </button>
        <span>{count}</span>
        <button onClick={adding}> + </button>        
        <button onClick={confirmarContador}>Agregar a mi compra</button>
    </div>
  )
}

export default ItemCount
