import React from "react";
import { Productos } from "./Productos";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const ItemListContainer = (props) => {
  const [cargo, setCargo] = useState(false);
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams();
  const catname = ["Todas las Categorias","Ropa","Electronicos","Muebles","Zapatos"]

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
        console.log(productos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoria]);

  return (
        
    <div className="d-flex flex-column ">
      <h2 className="mb-3 d-flex align-item-start ms-3">
        {props.greeting} {!cargo ? "Cargando..." : ""} {catname[categoria]} 
      </h2>
      <hr />
      <div className="content">
        {productos.map((producto) => (
          <div className="d-flex flex-column justify-content-center" key={producto.id}>
            <Productos producto={producto} key={producto.id} />
            <Link className="ms-2 me-2 btn btn-info btn-sm product" to={`/maindetail/${producto.id}`}>Agregar id: {producto.id}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
