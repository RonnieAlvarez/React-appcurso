import React from "react";
import ItemListContainer from "./ItemListContainer";
import Carrito from "./Carrito";


export const Main = () => {

  return (
    <div className="App">
    <ItemListContainer greeting="Productos"/>
    <Carrito/>
    

    </div>
  );
};

export default Main;


