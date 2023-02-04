import { ItemList } from "./ItemList";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "./../firebase";
import { collection, doc, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = (props) => {
  const [cargo, setCargo] = useState(false);
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams();
  const categoriaParam = parseInt(categoria);
  const catname = [
    "Todas las Categorias",
    "Ropa",
    "Electronicos",
    "Muebles",
    "Zapatos",
  ];
  const productsCollection = collection(db, "products");

  const getProducts = async () => {
    let data = await getDocs(productsCollection);
    const q = query(
      productsCollection,
      where("categoria", "==", categoriaParam)
    );
    if (categoriaParam > 0 && categoriaParam < 5) {
      data = await getDocs(q);
    }
    setProductos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setCargo(true);
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoriaParam]);

  return (
    <>
      <h2 className="mb-1 d-flex align-item-start ms-3">
        {props.greeting} {!cargo ? "Cargando..." : ""}{" "}
        {catname[categoriaParam] ? catname[categoriaParam] : catname[0]}
      </h2>
      <ItemList cargo={cargo} productos={productos} key={doc.id} />
    </>
  );
};

export default ItemListContainer;
