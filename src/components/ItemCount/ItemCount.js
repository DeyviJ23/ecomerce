import './ItemCount.css'
import { useState } from "react"

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState(1)

    const decrement = () => {
        if (count > 1) setCount (prev => prev-1)
    }

    const increment = () => {
        if (count < stock) setCount (prev => prev+1)
    }

    return(
        <div>
            <h3>{count}</h3>
            <button onClick={decrement} className="buttonCount">-</button>
            <button onClick={() => onAdd(count)} className="buttonAgregar">agregar al carrito</button>
            <button onClick={increment} className="buttonCount">+</button>
        </div>
    )
}

export default ItemCount