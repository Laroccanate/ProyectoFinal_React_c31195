import productos from "./productos"

const customFetch =()=>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(productos)
        },500)
    })
}

const getProductosById = (id)=>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(productos.find(prod => prod.id === id))
        },500)
    })
}



export default customFetch