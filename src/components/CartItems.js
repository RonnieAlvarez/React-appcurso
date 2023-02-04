import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { contexto } from "../context/CustomProvider";
import { useContext } from "react";

export const CartItems = (props) => {
  const { formatNumber } = useContext(contexto);

  return (
    <div className="container">
      <div className="Row d-flex flex-row align-items-center justify-content-evenly">
        <span className="col-sm img-item">
          <img
            className="img-cart"
            src={props.item.img}
            alt="Imagen del producto"
          />
        </span>
        <span className="col-sm">
          <span>Id: {props.item.id.substring(0, 5)} </span>
        </span>
        <span className="col-sm text-start">
          <span>{props.item.cantidad} </span>
        </span>
        <span className="col-sm text-start">
          <span>{props.item.titulo} </span>
        </span>
        <span className="col-sm text-end">
          <span className="text-end">{formatNumber(props.item.precio)} </span>
        </span>
        <span className="col-sm text-end">
          <span>{formatNumber(props.item.cantidad * props.item.precio)} </span>
        </span>
      </div>
    </div>
  );
};
