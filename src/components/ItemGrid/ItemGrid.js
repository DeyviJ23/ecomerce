import Item from "../Item/Item"

const ItemGrid = ({ products }) => {
    return (
        <div style={{display: 'flex'}}>
            {
                products.map(prod => {
                    return <Item key={prod.id} {...prod}/>
                })
            }
        </div>
    )
}

export default ItemGrid