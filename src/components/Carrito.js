import React from "react";
import { useContext } from "react";
import { contexto } from "../context/CustomProvider";
import { CartItems } from "./CartItems";
import trash from "./comp_imgs/trash.svg";
import { useAuthValue } from "../AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from 'react-router-dom';



export const Carrito = () => {
  const { cart, vtotal, cantArticulos, vaciarCarrito, formatNumber } =
    useContext(contexto);
  const { currentUser } = useAuthValue();
 

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h2>Carrito de compras: </h2>{" "}
      <span>
        Usuario actual : {currentUser?.email}{" "}
        <button
          className="ms-2 py-0 btn btn-outline-warning btn-sm "
          onClick={() => signOut(auth)}
        >
          Sign Out
        </button>
      </span>
      <div className="content d-flex flex-row justify-content-center align-items-center">
        {cart.map((item, i) => (
          <div className="cart-item" key={i}>
            <CartItems item={item} />
          </div>
        ))}
        <div className="cart-item Row w-75 d-flex flex-row  align-items-center justify-content-around">
          <span className="Col text-dark img-item">
            Cantidad Articulos:{"\u00A0"} {cantArticulos} {"\u00A0"}
            {"\u00A0"} Total de la Compra: {"\u00A0"} {formatNumber(vtotal)}
          </span>

          <Link className="btn btn-warning " to="/checkout">
            Checkout
          </Link>

          <button
            className="py-0  btn btn-outline-danger "
            onClick={() => vaciarCarrito()}
          >
            {" "}
            Vaciar <img src={trash} width="12px" alt="limpiar carrito" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
