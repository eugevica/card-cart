import { useState } from 'react'
import { CartContext } from '../context/CartContext'

function CartProvider({ children} ) {
    const [cart, setCart] = useState ([])

    //TODO prevenir duplicados
    const addToCart = (prod) => setCart ([...cart, prod])

    const getProdsInCart = () => cart.reduce ((acu, curr) => acu + curr.count, 0)

    const getCartTotal = () => cart.reduce ((acu, curr) => acu + (curr.count*curr.price), 0)

    const removeFromCart = (prod) => {
      const cartCopy = cart.filter (item => isValidElement.id !== prod.id) 
      setCart (cartCopy)
    }

    const clearCart = () => {
    setCart([])
    }
  
    return (
    <CartContext.Provider value = {{ addToCart, getProdsInCart, cart, getCartTotal, removeFromCart }} >
        {children}
    </CartContext.Provider>

  )
}

export default CartProvider
