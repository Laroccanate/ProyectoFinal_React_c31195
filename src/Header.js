import {Link} from "react-router-dom"


const Header = () => {    
    return(
        <header>
            <Link to="/">
                <h1 className="d-flex justify-content-center"> Tu Tiendita Fiu Fiu  </h1> 
            </Link>       
            
        </header>
    )  
}
export default Header