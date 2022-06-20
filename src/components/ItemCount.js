import React from 'react'
import { useState } from 'react'

function ItemCount({stock}) {
    
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
    const confirmarContador = () => {
        alert ("Se agregó al carrito")
    }

  return (
    <div>
        <button onClick= {subs}> - </button>
        <span>{count}</span>
        <button onClick={adding}> + </button>        
        <button onClick={confirmarContador}>Agregar</button>
    </div>
  )
}

export default ItemCount
