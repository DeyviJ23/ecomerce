import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ name, img, price, category, description, stock}) => {
    const [quantity, setQuantity] = useState(0)

    const handleOnAdd = (quantity) => {
        setQuantity(quantity)
    }

    return(
        <div>
            <h1>{name}</h1>
            <img src={img} alt={name} style={{width:100}}/>
            <p>category: {category}</p>
            <p>${price}</p>
            <p>Descripcion: {description}</p>
            {
                quantity == 0
                    ? (stock > 0 ? <ItemCount stock={stock} onAdd={handleOnAdd}/> : <p>No hay stock del producto</p> )
                    : <button>finalizar compra</button>
            }
        </div>
    )
}

export default ItemDetail