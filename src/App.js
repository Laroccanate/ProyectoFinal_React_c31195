import React from 'react';
import Header from "./components/Header"
import Main from "./components/Main"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route}  from 'react-router-dom';
import {MiProvider} from './components/CartContext';



console.log(process.env)

const App = () => {
    return (         
        <BrowserRouter>
        <MiProvider> 
        <Header/> 
        <NavBar/>          
        <Main/>
        <Routes>
            <Route path={"/"} element={<ItemListContainer/>}/>
            <Route path={"/category/:categoryId"} element={<ItemListContainer/>}/>
            <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
            <Route path={"/cart"} element={<Cart/>}/>
            <Route path={"/checkout"} element={<Checkout/>}/>
        </Routes>
        </MiProvider>
        <Footer/>
        </BrowserRouter>
    )
}

export default App; 