const productos=[
    {
        id: 1,
        name: 'Destino 1',
        image:'https://picsum.photos/200/300?image=10',
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet suscipit in quod est quasi temporibus, magnam doloremque sapiente molestiae quos facilis asperiores? Minima explicabo consequatur quia quod temporibus voluptate molestiae.",
        stock: 15
    },
    {
        id: 2,
        name: 'Destino 2',
        image:'https://picsum.photos/200/300?image=11',
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet suscipit in quod est quasi temporibus, magnam doloremque sapiente molestiae quos facilis asperiores? Minima explicabo consequatur quia quod temporibus voluptate molestiae.",
        stock: 10
    },
    {
        id: 3,
        name: 'Destino 3',
        image:'https://picsum.photos/200/300?image=12',
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet suscipit in quod est quasi temporibus, magnam doloremque sapiente molestiae quos facilis asperiores? Minima explicabo consequatur quia quod temporibus voluptate molestiae.",
        stock: 12
    }
]


const producto =
{
    id: 1,
    name: 'Destino 1',
    image:'https://picsum.photos/200/300?image=10',
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet suscipit in quod est quasi temporibus, magnam doloremque sapiente molestiae quos facilis asperiores? Minima explicabo consequatur quia quod temporibus voluptate molestiae.",
    stock: 15
}


export const traerProductos =()=>{
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            resolve(productos);
        }, 1000);
    });
};

export const traerProducto =()=>{
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            resolve(producto);
        }, 1000);
    });
};

export default productos;