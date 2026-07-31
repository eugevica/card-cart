import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'

function Counter() {
  const [count, setCount] = useState(1)  

  const handleDecrease = () => setCount (count -1)
  const handleIncrease = () => setCount (count + 1)
  
  return (
    <div>
        <p>{count}</p>
        <button onClick={() => addToCart({...item, count})}>Agregar al carro</button>
        <button onClick={handleDecrease}>-</button>
        <button onClick={handleIncrease}>+</button>
    </div>
  )
}

export default Counter