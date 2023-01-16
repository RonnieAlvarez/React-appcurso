import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from "react";
import "../src/App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Home from "./components/Home"


export default function App() {
  return (
    <div>
    <BrowserRouter>
      <NavBar />
      <Routes>
          <Route path='/' element={<Home />} />
					<Route path='/main' element={<ItemListContainer greeting="Productos:" />} />
					<Route path='/main/:categoria' element={<ItemListContainer greeting="Categoria:"/>} />
          <Route path='/maindetail' element={<ItemDetailContainer/>} />
          <Route path='/maindetail/:item' element={<ItemDetailContainer/>} />
          <Route path="*" element={<p>Error 404 Archivo no encontrado...</p>}/>
        </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

