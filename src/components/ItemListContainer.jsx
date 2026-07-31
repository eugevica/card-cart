import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getCollection, getProductsByCategory } from '../firebase/db'
import ItemList from './ItemList'


function ItemListContainer () {
    const [items, SetItems] = useState ([])
    const { categoryName } = useParams()

    if (items.length == 0) {
        return (
            <div>
            <h2> No hay productos todavía </h2>
            <button onClick={() => navigate ('/')}>Volver</button>
            </div>
            )
    }

    useEffect (() => {
                
        if (categoryName) {
            getProductsByCategory(categoryName)
            .then(prods => setItems(prods))
        } 
        
        else {
            getCollection('products')
            .then(prods => setItem(prods))
        }
                        
    }, [categoryName])
    
    return (
        <ItemList items={items} />
    )
}

export default ItemListContainer