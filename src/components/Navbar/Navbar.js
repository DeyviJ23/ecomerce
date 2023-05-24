import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <header>
            <div class="contenedorinicial">
                <nav class="navegadorinicial">
                    <h1 className='Titulo'>PetShop - El Rufian</h1>
                    <ul>
                        <li><a href="#">Alimento</a></li>
                        <li><a href="#">Accesorios</a></li>
                        <li><a href="#">Cuidado e Higiene</a></li>
                        <li><a href="#">Otros</a></li>
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