import './navbar.css'
import {Link, useLocation} from 'react-router-dom'
export default function Navbar() {
    const location = useLocation()
    return (
        <div className="nav-container">
            <Link to='/' className={`text-white text-base hover:text-lime-500 ${location.pathname.includes('/products') && 'text-lime-500'} duration-500`}> 
                Products
            </Link>
            <Link to='/cart' className={`text-white text-base hover:text-lime-500 ${location.pathname === '/cart' && 'text-lime-500'} duration-500`}> 
                Cart
            </Link>
        </div>
    )
}