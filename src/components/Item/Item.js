import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({ id, name, img, price, stock}) => {
    return(
        <div className="cartProduct">
            <h2>{name}</h2>
            <img src={img} alt={name} style={{width:200, height:200}}/>
            <p>Precio: ${price}</p>
            <p>Stock disponible: {stock}</p>
            <button className="buttonDetail"><Link to={`/item/${id}`}>ver detalle</Link></button>
        </div>
    )
}

export default Item