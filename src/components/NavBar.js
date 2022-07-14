import CartWidget from "./CartWidget"
import {NavLink} from "react-router-dom"


const NavBar = () => {
    return( 
            <nav className="navbar navbar-light bg-light">                           
                <NavLink to="/category/jewelery">{"Jewelery"}</NavLink>
                <NavLink to="/category/electronics">{"Electronics"}</NavLink>
                <NavLink to="/category/clothing">{"Clothing"}</NavLink>                
                <CartWidget/>
            </nav>           
    ) 
}
export default NavBar
 