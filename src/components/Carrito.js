import React from "react";
import { useContext } from "react";
import { contexto } from "../context/CustomProvider";
import { CartItems } from "./CartItems";
import trash from "./comp_imgs/trash.svg";

export const Carrito = () => {
  const { cart,vtotal,cantArticulos,vaciarCarrito,formatNumber } = useContext(contexto);
  
  return (
     <>
 
    <div className="d-flex flex-column justify-content-center align-items-center" >
    <h2>Carrito de compras</h2>
     
      {cart.map((item) => (
       <div className="cart-item" >
        <CartItems key={item.item} item={item} /> 
        </div>
        
        ))}
        <div className="Row w-100 d-flex flex-row  align-items-center justify-content-around">
        <span className="Col img-item">Cantidad Articulos:{'\u00A0'} {cantArticulos} {'\u00A0'}{'\u00A0'} Total de la Compra: {'\u00A0'} { formatNumber(vtotal)}</span>
        <button onClick={()=> vaciarCarrito()}>
        <img src={trash} width="30px" alt="limpiar carrito" />
        </button>
      </div>

    </div>
        
    </>
  );
};

export default Carrito;
