import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from "react";
import "../src/App.css";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemListContainer from './components/ItemListContainer';


export default function App() {
  return (
    <div>
    <BrowserRouter>
      <NavBar />
      <Routes>
					<Route path='/' element={<Main />} />
					<Route path='/main' element={<Main />} />
          <Route path='/main/tienda' element={<ItemListContainer />} />
					<Route path='/main/tienda/:categoria' element={<ItemListContainer />} />
					{/* <Route path='/producto/:id' element={<ItemDetailContainer />} /> */}
          <Route path="*" element={<p>Error 404 Archivo no encontrado...</p>}/>
        </Routes>
      
      <Footer />
    </BrowserRouter>
    </div>
  );
}

