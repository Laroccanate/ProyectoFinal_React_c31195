import React, { useEffect } from 'react';
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import NavBar from "./components/NavBar"
import CartWidget from "./components/CartWidget"
import ItemLIstContainer from "./components/ItemLIstContainer"
import ItemCount from "./components/ItemCount"
import {container} from "react-bootstrap"
import ItemDetailContainer from './components/ItemDetailContainer';



const App = () => {
    return (
        <>
        <Header/>   
        <Main/>
        <ItemLIstContainer greeting= "Bienvenido"/>
        <ItemDetailContainer/>
        <Footer/>
        </>
    )
}

export default App; 