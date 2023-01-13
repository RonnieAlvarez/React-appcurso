import React from "react";
import { Productos } from "./Productos";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const ItemListCat = (props) => {
  const [cargo, setCargo] = useState(false);
  const [productos, setProductos] = useState([]);
const { categoria } = useParams();

  useEffect(() => {

    const pedido = fetch(`https://api.escuelajs.co/api/v1/categories/${categoria}/products`);
    pedido
      .then((response) => {
        const productos = response.json();
        return productos;
      })
      .then((productos) => {
        setProductos(productos);
        console.log(productos);
        setCargo(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoria]);

  return (
    <div className="d-flex flex-column ">
      <h2 className="mb-3 d-flex align-item-start ms-3">
        {props.greeting} {!cargo ? "Cargando..." : ""}
      </h2>
      <hr />
      <div className="content">
       {productos.map((producto) => (
         <Productos producto={producto} key={producto.id} />
            
        ))}
      </div>
    </div>
  );
};

export default ItemListCat;
