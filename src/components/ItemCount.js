import { useState } from "react"


const ItemCount = ({ stock, initial, onAdd }) => {

const [contador, setContador] = useState(0)

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


export default ItemCount