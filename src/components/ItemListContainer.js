import { ItemList } from './ItemList';
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const ItemListContainer = (props) => {
  const [cargo, setCargo] = useState(false);
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams();
  const catname = [
    "Todas las Categorias",
    "Ropa",
    "Electronicos",
    "Muebles",
    "Zapatos",
  ];
  
  
  useEffect(() => {
    let resto = "products";
    if (categoria > 0 && categoria < 5) {
      resto = `categories/${categoria}/products`;
    }
    const pedido = fetch(`https://api.escuelajs.co/api/v1/${resto}`);
    pedido
      .then((response) => {
        const productos = response.json();
        return productos;
      })
      .then((productos) => {
        setProductos(productos);
        setCargo(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoria]);

  return (<>
      <h2 className="mb-1 d-flex align-item-start ms-3">
        {props.greeting} {!cargo ? "Cargando..." : ""}{" "}
        {catname[categoria] ? catname[categoria] : catname[0]}
      </h2>
      <ItemList   cargo={cargo} productos={productos} />;
  </>
  )
};

export default ItemListContainer;
