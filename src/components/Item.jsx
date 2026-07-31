import { useNavigate } from 'react-router'

//muestra los datos de cada item

function Item ({item}) {
    return (
        <div>
            <figure>
                <img src={item.image} 
                alt={item.name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.category}</p>
                <p>{item.price}</p>
                <div>
                    <button className="btn btn-primary"
                    onClick={() => navigate('/item/${item.id}')}> filtrar </button>
                </div>
            </div>
        </div>
    )
}

export default Item