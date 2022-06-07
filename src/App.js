import React from 'react';
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import NavBar from "./components/NavBar"
import CartWidget from "./components/CartWidget"
import ItemLIstContainer from "./components/ItemLIstContainer"
import ItemCount from "./components/ItemCount"
import {container} from "react-bootstrap"

const App = () => {
    return (
        <>
        <Header/>   
        <ItemLIstContainer greeting= "Bienvenido"/>
        <Main/>
        <Footer/>
        </>
    )
}

export default App; 