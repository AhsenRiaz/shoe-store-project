import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import Header from "./components/Header"
import ProductDetails from "./components/ProductDetails";
import Men from "./components/Men"
import Women from "./components/Women"

function App() {
  return (
    <div>

    <BrowserRouter >
    <Header/>

          <Routes>
            <Route path = "/" element = {<Home/>}></Route>
            <Route path = "/:id" element = {<ProductDetails/>}></Route>  
            <Route path = "men" element = {<Men/>}></Route>
            <Route path = "men/:id" element = {<ProductDetails/>}></Route>
            <Route path = "women" element = {<Women/>}></Route>
            <Route path = "women/:id" element = {<ProductDetails/>}></Route>
          </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
