import React from "react";
import { Productos } from "./Productos";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const ItemListContainer = (props) => {
  const [cargo, setCargo] = useState(false);
  const [productos, setProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    const pedido = fetch("https://api.escuelajs.co/api/v1/products");
    pedido
      .then((response) => {
        const productos = response.json();
        return productos;
      })
      .then((productos) => {
        setProductos(productos);
        setCargo(true);
        setProductosFiltrados(productos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleFilter = (e) => {
    const copia = productos.filter((producto) => {
      if (e.target.value == "") {
        return producto;
      } else {
        if (e.target.dataset.filter === "id") {
          return producto.id == Number(e.target.value);
        }
        if (e.target.dataset.filter === "title") {
          return producto.title
            .toLowerCase()
            .includes(e.target.value.toLowerCase());
        }
        if (e.target.dataset.filter === "price") {
          return producto.price > Number(e.target.value);
        }
        console.log(categoria);
        if (Number(categoria) > 0) {
          return producto.category.id === Number(categoria);
        }
        if (e.target.value === "todos") {
          return producto;
        } else {
          return producto.category.name === e.target.value;
        }
      }
    });
    setProductosFiltrados(copia);
  };

  const handleCategories = (categoria) => {
    const copia = productos.filter((producto) => {
      if (categoria == "") {
        return producto;
      } else {
        return producto.category.id === categoria;
      }
    });
    setProductosFiltrados(copia);
  };

  return (
    <div className="d-flex flex-column ">
      {/* if (!categoria==""){handleCategories()} */}
      <h2 className="mb-3 d-flex align-item-start ms-3">
        {props.greeting} {!cargo ? "Cargando..." : ""}
      </h2>
      <nav className="filtros ">
        <h4>Filtros: </h4>
        <input
          className="inputs"
          data-filter="id"
          onChange={handleFilter}
          type="number"
          placeholder="Id del producto"
        />
        <input
          className="inputs"
          data-filter="title"
          onChange={handleFilter}
          type="text"
          placeholder="Nombre del producto"
        />
        <input
          className="inputs"
          data-filter="price"
          onChange={handleFilter}
          type="number"
          placeholder="Precio mayor a"
        />
        <select
          data-filter="category.name"
          onChange={handleFilter}
          className="inputs"
        >
          <option value="todos">Categirias</option>
          <option value="Clothes">Clothes</option>
          <option value="Electronics">Electronics</option>
          <option value="Furniture">Furniture</option>
          <option value="Shoes">Shoes</option>
          <option value="Others">Others</option>
        </select>
      </nav>
      <hr />
      <div className="content">
        {productosFiltrados.map((producto) => (
          <Productos producto={producto} key={producto.id} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
