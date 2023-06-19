import { Link } from "react-router-dom"
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <header>
            <div class="contenedorinicial">
                <nav class="navegadorinicial">
                    <Link to={'/'}><h1 className='Titulo'>PetShop - El Rufian</h1></Link>
                    <ul>
                        <li><Link to={'/category/alimento'}>Alimento</Link></li>
                        <li><Link to={'/category/accesorios'}>Accesorios</Link></li>
                        <li><Link to={'/category/cuidado'}>Cuidado e Higiene</Link></li>
                        <li><Link to={'/category/otros'}>Otros</Link></li>
                        
                    </ul>
                    <div class="contenedorcart">
                        <CartWidget/>
                    </div>
                </nav>
            </div>
        
        </header>
    )
}

export default Navbar