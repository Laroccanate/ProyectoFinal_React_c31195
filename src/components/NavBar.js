import CartWidget from "./CartWidget"
import {Link,NavLink} from "react-router-dom"

const NavBar = () => {
    return( 
            <nav className="navbar navbar-light bg-light">                           
                <NavLink to="/category/jewelery">{"jewelery"}</NavLink>
                <NavLink to="/category/electronics">{"electronics"}</NavLink>
                <NavLink to="/category/clothing">{"clothing"}</NavLink>
            </nav>           
    ) 
}
export default NavBar
