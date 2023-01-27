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
    console.log(item)

  //  const productsCollection=(collection(db,"products"))

  // const getProducts = async () => {
  // const q = query(productsCollection)
  // const data = await getDocs(q);
  // setProductos1(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  // };

  const getProductsById = async (id) => {
    const product = await getDoc(doc(db, "products", id));
    if (product.exists()) {
      //console.log(product.data().description)
      //console.log(product.data().stock)
      //console.log(product.data().images)
      //setProductos1(product.data());
      setProductos1({ ...product.data(), id: item });
      console.log(productos1)
    } else {
      console.log("Product not found");
    }
  };

  useEffect(() => {
    // getProducts();
    getProductsById(item);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item]);

  return <ItemDetail producto={productos1} />;
};

export default ItemDetailContainer;
