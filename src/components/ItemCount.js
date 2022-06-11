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
  return (
    <div>
        <button onClick= {subs}> - </button>
        <span>{count}</span>
        <button onClick={adding}> + </button>
    </div>
  )
}

export default ItemCount



/*import { useEffect, useState } from "react"

const ItemCount = ({ stock, initial, onAdd }) => {

const [contador, setContador] = useState(initial)

useEffect(()=>{
   // console.log({contador})
},[])

const aumentarContador = () => {
    setContador(contador+1)
}

const bajarContador = () => {
    setContador(contador-1)    
}
    return(
        <div>
        <p>Total : {contador}</p>
        <button onClick={aumentarContador}>Sumar</button>
        <button onClick={bajarContador}>Restar</button>
        <button>Confirmar</button>
        </div>
)
}


export default ItemCount*/