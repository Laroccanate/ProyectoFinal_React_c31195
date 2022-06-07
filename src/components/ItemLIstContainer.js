import ItemCount from "./ItemCount"

const ItemListContainer = (respuesta) => {    
        return(
            <>
            <p className="d-flex justify-content-center" >{respuesta.greeting}</p>
            <ItemCount/>
            </>
    ) 
}

export default ItemListContainer