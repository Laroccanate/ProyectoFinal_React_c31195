import React from 'react';
import Header from "./Header"
import Main from "./Main"
import NavBar from "./components/NavBar"
import Footer from "./Footer"
import Carrito from './components/Carrito';
import Checkout from './components/Checkout';
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route}  from 'react-router-dom';
import {MiProvider} from './components/CartContext';

const App = () => {
    return (        
        <BrowserRouter>
        <MiProvider> 
        <Header/> 
        <NavBar/>          
        <Main/>
        <Routes>
            <Route path={"/"} element={<ItemListContainer/>}/>
            <Route path={"/category/:id"} element={<ItemListContainer/>}/>
            <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
            <Route path={"/carrito"} element={<Carrito/>}/>
            <Route path={"/checkout"} element={<Checkout/>}/>
        </Routes>
        </MiProvider>
        <Footer/>
        </BrowserRouter>
    )
}

export default App; 