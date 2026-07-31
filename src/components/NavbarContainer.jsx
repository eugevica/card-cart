import { useState, useEffect, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { getCollection } from '../firebase/db'
import NavBar from './NavBar'

function NavbarContainer () {
    const [categories, setCategories] = useState ([])
    const { getProdsInCart } = useState ([])
    const context = useContext(CartContext)

    useEffect (() => {     
        getCollection ('categories')
        .then(cates => {
            const namesOnly = cates.map (cate => cate.name)
            setCategories (namesOnly)
        })
    }, [])

    return (
        <NavBar categories={categories} 
        getProdsInCart={getProdsInCart}/>
    
    )
}

export default NavbarContainer
