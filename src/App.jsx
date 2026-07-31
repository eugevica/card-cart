import React from "react"
import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router"
import NavbarContainer from './components/NavbarContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import Purchase from './components/Purchase'
import './App.css'
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <div>      
      <NavbarContainer />
      <BrowserRouter>        
        <Routes>
          <Route path="/" element={<NavbarContainer />} /> 
          <Route path="/category/:categoryName" element={<ItemListContainer/>} />
          <Route path="/item/:id" element={<ItemDetailContainer/>} /> 
          <Route path="/cart" element={<Cart/>} /> 
          <Route path="/purchase" element={<Purchase/>} /> 
        </Routes>       
      </BrowserRouter>
      <h1>Comprá tus cartas acá</h1>            
    </div>
  );
};

export default App
