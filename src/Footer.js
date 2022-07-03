import NavBar from "./components/NavBar"


const Footer = () => {
    return(
        <>
        <footer className="d-flex justify-content-center navbar navbar-light bg-light ">
        <nav className="navbar navbar-light bg-light">                   
                <a className="navbar-brand" href="https://www.instagram.com/">Instagram</a>
                <a className="navbar-brand" href="https://es-la.facebook.com/">Facebook</a>
                <a className="navbar-brand" href="https://twitter.com/">Twitter</a>
                <a className="navbar-brand" href="https://www.pinterest.es/">Pinterest</a>
            </nav>           
        </footer>
        <p className="d-flex justify-content-center">Copyright &Copy</p>
        </>
    ) 
} 
export default Footer