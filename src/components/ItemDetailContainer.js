import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

export const ItemDetailContainer = () => {
  const [productos1, setProductos1] = useState([]);
  const { item } = useParams();
  
  useEffect(() => {
    const pedido = fetch(`https://api.escuelajs.co/api/v1/products/${item}`);
    pedido
    .then((response) => {
      const productos = response.json();
      return productos;
    })
    .then((productos) => {
      setProductos1(productos);
  
      })
      .catch((error) => {
        console.log(error);
      });
  }, [item]);

  
  return (<ItemDetail producto={productos1} />
  );
};

export default ItemDetailContainer;
