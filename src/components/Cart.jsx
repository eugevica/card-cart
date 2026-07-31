import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router'

function Cart() {
  const { cart, getCartTotal } = useContext(CartContext)
  const total = getCartTotal()
  const navigate = useNavigate()

  if (cart.length == 0) {
    return (
      <div>
        <h2> No hay productos todavía </h2>
        <button onClick={() => navigate ('/')}>Volver</button>
      </div>
    )
  }
  
  return (
    <div>        
        <ul>            
            {cart.map (prod => (
               <li>  
                <img src={prod.image} alt={prod.name} /> 
                <div>x{prod.count} c/u {prod.price}
                    <button>+</button>
                    <button onClick={() => deleteFromCart(prod)}></button>
               </div>
               </li>
            ))}
            <hr />
            <p>Total = $ {total}</p>
        <button className='btn' onClick={() => navigate('/purchase')}>Ir al detalle de la compra</button>
        </ul>
    </div>
  )
}

export default Cart