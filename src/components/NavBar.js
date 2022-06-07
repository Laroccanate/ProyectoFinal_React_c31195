import CartWidget from "./CartWidget"


const NavBar = () => {
    return( 
            <>                       
            <nav className="navbar navbar-light bg-light">                   
                <a className="navbar-brand" href="https://www.instagram.com/">Instagram</a>
                <a className="navbar-brand" href="https://es-la.facebook.com/">Facebook</a>
                <a className="navbar-brand" href="https://twitter.com/">Twitter</a>
                <a className="navbar-brand" href="https://www.pinterest.es/">Pinterest</a>
                <CartWidget/> 
            </nav>   
            
            </>
        
    ) 
}
export default NavBar
