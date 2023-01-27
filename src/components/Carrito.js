import React from "react";
import { useContext } from "react";
import { contexto } from "../context/CustomProvider";
import { CartItems } from "./CartItems";
import trash from "./comp_imgs/trash.svg";
//import { db } from './../firebase';


export const Carrito = () => {
  const { cart,vtotal,cantArticulos,vaciarCarrito,formatNumber } = useContext(contexto);
  console.log(cart)
  return (

<div className="d-flex flex-column justify-content-center align-items-center" >

    <h2>Carrito de compras</h2>
    <div className="content d-flex flex-row justify-content-center align-items-center" >
     
      {cart.map((item,i) => (
       <div className="cart-item" key={i} >
        <CartItems item={item} /> 
        </div>
        
        ))}
        <div className="cart-item Row w-75 d-flex flex-row  align-items-center justify-content-around">
        <span className="Col text-dark img-item">Cantidad Articulos:{'\u00A0'} {cantArticulos} {'\u00A0'}{'\u00A0'} Total de la Compra: {'\u00A0'} { formatNumber(vtotal)}</span>
        <button onClick={()=> vaciarCarrito()}> Vaciar Carrito{' '}
        <img src={trash} width="15px" alt="limpiar carrito" />
        </button>
      </div>
    </div>
</div>
  );
};

export default Carrito;
