import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { contexto } from "./CartContext"


function Cart() {

const {carrito, getSubtotal, eliminarProducto, cartLenght, getTotal, vaciarCarrito} = useContext(contexto)


  return (
    <>
{cartLenght() === 0 ? (        
          <div className='page page__in page__center'>
            <p className='titulo22'>Oops! Tu carrito está vacío. </p>
            <p className='titulo22'>Por favor, agregá algún producto para poder continuar.</p>
            <Link to='/'><button className='btnconf'>volver al inicio</button></Link>
          </div>
        
        ) : (    
    
<div className="page">
    <div className="page__in">
        <div className="cart">
            <h2 className="titulo32">Mi Carrito</h2>
        </div>
        <div className="cart__table">
            <div className="cart__table__row">
                <div className="cart__table__row__col">
                    <p className="txt16d">Producto</p>
                </div>
                <div className="cart__table__row__col">
                    <p className="txt16d"></p>
                </div>
                <div className="cart__table__row__col">
                    <p className="txt16d">Precio</p>
                </div>
                <div className="cart__table__row__col">
                    <p className="txt16d">Cantidad</p>
                </div>
                <div className="cart__table__row__col">
                    <p className="txt16d">Subtotal</p>
                </div>
                <div className="cart__table__row__col">
                    <p className="txt16d"></p>
                </div>
            </div>
            </div>
            <div>
            {carrito.map((product) => (
                    <div key={product.id} className="cart__table__row">
                        <div className="cart__table__row__col">
                            <img className="cart__img" src={product.image} alt={product.title} />
                        </div>
                        <div className="cart__table__row__col">
                            <p className="txt16d">{product.title}</p>
                        </div>
                        <div className="cart__table__row__col">
                            <p className="txt16d">${product.price}</p>
                        </div>
                        <div className="cart__table__row__col">
                            <p className="txt16d">{product.cantidad}</p>
                        </div>
                        <div className="cart__table__row__col">
                            <p className="txt16d">
                            ${parseFloat(getSubtotal(product.price, product.cantidad))}
                            </p>
                        </div>
                        <div className="cart__table__row__col">
                          <span onClick={() => eliminarProducto(product.id)} className="cart__icon material-symbols-outlined">delete</span>                        
                        </div>
                    </div>
                ))}
            </div>


            <div className="cart__clear">
              <button className="btnconf" onClick={vaciarCarrito}>
                Vaciar Carrito
              </button>
              
            </div>
            <div>
              <div className="page__flex page__flex__end">
                <p className="cart__items">Items total:</p>
                <p className="cart__items">{cartLenght()}</p>
              </div>
              <div className="page__flex page__flex__end">
                <p className="cart__total">TOTAL:</p>
                <p className="cart__total">$ {parseFloat(getTotal())}</p>
              </div>
            </div>
            <div className="page__flex page__flex__end">
              <Link to="/" className="btnconf">Seguir comprando</Link>
            </div>            
            <div className="page__flex page__flex__end">
              <Link to="/checkout" className="btnconf">FINALIZAR COMPRA</Link>
            </div>
            
        
    </div>
</div>
    )}
    </>
  )
}
export default Cart
