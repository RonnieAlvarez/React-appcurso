import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { contexto } from "../context/CustomProvider";
import { useContext } from "react";

export const CartItems = (props) => {
    const {formatNumber}= useContext(contexto)

    return (
    <div className="container">
      <div className="Row w-100 d-flex flex-row  align-items-center justify-content-around">
        <span className="Col img-item">
          <img
            className="img-cart"
            src={props.item.img}
            alt="Imagen del producto"
          />
        </span>
        <span className="Col">
          <span>Id:{' '}{props.item.id.substring(0,5)} </span>
        </span>
        <span className="Col">
          <span>{props.item.cantidad} </span>
        </span>
        <span className="Col">
          <span>{props.item.titulo} </span>
        </span>
        <span className="Col">
          <span>{formatNumber(props.item.precio)} </span>
        </span>
        <span className="Col">
          <span>{formatNumber(props.item.cantidad * props.item.precio)} </span>
        </span>
      </div>
    </div>
  );
};
