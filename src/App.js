import React from 'react';
import Header from "./Header"
import Main from "./Main"
import NavBar from "./components/NavBar"
import Footer from "./Footer"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route}  from 'react-router-dom';



const App = () => {
    return (        
        <BrowserRouter>
        <Header/> 
        <NavBar/>          
        <Main/>
        <Routes>
            <Route path={"/"} element={<ItemListContainer/>}/>
            <Route path={"/category/:id"} element={<ItemListContainer/>}/>
            <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
        </Routes>                   
        <Footer/>
        </BrowserRouter>
    )
}

export default App; 