import Counter from './Counter'

function ItemDetail ({item, onClick }) {

//TODO estilar con Daisy

return (
    <div className='grid'>
        <img src={item.thumbnail} alt={item.title} />
        <div> 
            <h2> {item.title}</h2>
            <p>{item.price}</p>
            <p>{item.description}</p>
            <button onClick={onClick}>Agregar al carro</button>
            <Counter item={item} />

            
        </div>        
    </div>
    )
}

export default ItemDetail