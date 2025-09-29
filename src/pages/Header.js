
import { Link } from "react-router-dom";

const Header = ({role}) => {
    return (
        <header className="header">
            
        <div class="logo">
            <h1>viuflix</h1>
        </div>
        <nav>
            <ul>
                <li>Account</li>
                <li>Order</li>
                {role === "user"&&(<li><Link to="cartlist">Cart</Link></li>)}
                 {role === "seller" && (
            <li>
              <Link to="/wishlist">Wishlist</Link>
            </li>
          )}
            </ul>
        </nav>

        </header>
        
        
    )
    
}


export default Header;