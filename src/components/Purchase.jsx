import { useContext } from 'react'
import { CartContext } from 'react' 
import { serverTimestamp } from 'firebase/firestore' 
import { addPurchase } from '../firebase/db'

function Purchase() {
    const {cart} = useContext (CartContext) 

    const handleCreateOrder = (e) => {
        e.preventDefault()

        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const phone = form.phone.value
        const address = form.address.value

        addPurchase ({
            user: { name: name, email: email, phone: phone, address: address },
            item: cart,
            time: serverTimestamp()
        })

    }
  return (
    <div>
        <form className='flex flex-col' onSubmit={handleCreateOrder}>
            <input id = 'name' type="text" placeholder="Cliente" className="input" />
            <input id = 'email' type="email" placeholder="cliente@email.com" className="input" />
            <input id = 'phone' type="text" placeholder="+54112345678" className="input" />
            <input id = 'address' type="text" placeholder="Calle, N°, localidad" className="input" />
            <button className='btn'>Realizar compra </button>
        </form>

    </div>
  )
}

export default Purchase