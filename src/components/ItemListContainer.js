import React from "react";
import { Productos } from "./Productos";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const ItemListContainer = (props) => {
  const [cargo, setCargo] = useState(false);
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    let resto = "products";
    if (
      categoria === "1" ||
      categoria === "2" ||
      categoria === "3" ||
      categoria === "4"
    ) {
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

  return (
    <div className="d-flex flex-column ">
      <h2 className="mb-3 d-flex align-item-start ms-3">
        {props.greeting} {!cargo ? "Cargando..." : ""}
      </h2>
      <hr />
      <div className="content">
        {productos.map((producto) => (
          <div key={producto.id}>
            <Productos producto={producto} key={producto.id} />
            <Link to={`/maindetail/${producto.id}`}>Agregar {producto.id}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
