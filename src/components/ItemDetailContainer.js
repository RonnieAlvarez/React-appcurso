import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { db } from "./../firebase";
import { getDoc, doc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const [productos1, setProductos1] = useState([]);
  const { item } = useParams();
  const getProductsById = async (id) => {
    const product = await getDoc(doc(db, "products", id));
    if (product.exists()) {
      setProductos1({ ...product.data(), id: item });
    } else {
      console.log("Producto no encontrado");
    }
  };

  useEffect(() => {
    getProductsById(item);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item]);

  return <ItemDetail producto={productos1} />;
};

export default ItemDetailContainer;
