import CartWidget from "./CartWidget"
import {NavLink} from "react-router-dom"


const NavBar = () => {
    return( 
            <nav className="navbar navbar-light bg-light">                           
                <NavLink to="/category/jewelery">{"jewelery"}</NavLink>
                <NavLink to="/category/electronics">{"electronics"}</NavLink>
                <NavLink to="/category/clothing">{"clothing"}</NavLink>
                <CartWidget/>
            </nav>           
    ) 
}
export default NavBar
