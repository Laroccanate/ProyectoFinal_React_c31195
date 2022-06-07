import ItemCount from "./ItemCount"

const ItemListContainer = (respuesta) => {    
        const onAdd = () =>{}
    return(
            <>
            <p className="d-flex justify-content-center" >{respuesta.greeting}</p>
            <ItemCount stock={5} onAdd={onAdd} initial={0}/>
            </>
    ) 
}

export default ItemListContainer