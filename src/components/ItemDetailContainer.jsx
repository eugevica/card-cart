import { useState, useEffect, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { useParams } from 'react-router'
import { getDetail } from '../firebase/db'
import ItemDetail from './ItemDetail'

function ItemDetailContainer () {
    const [item, setItem] = useState ({
        thumbnail: 'cargando', 
        title: 'producto', 
        price: 0, 
        description: ''})
    
    const { id } = useParams ()
    const { addToCart } = useContext (CartContext)

    useEffect (() => {        

        getDetail(id)
        .then(prod => setItem(prod))
    }, [id]) 

    return (
    <ItemDetail item={item} onclick={() => addToCart(item)} />
    )
}

export default ItemDetailContainer