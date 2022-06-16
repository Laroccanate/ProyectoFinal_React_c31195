import NavBar from "./components/NavBar"
import {Link,NavLink} from "react-router-dom"


const Header = () => {
    console.log()
    return(
        <header>
            <Link to="/">
                <h1 className="d-flex justify-content-center"> Este es un titulo de demostracion  </h1> 
            </Link>       
            
        </header>
    ) 
}
export default Header