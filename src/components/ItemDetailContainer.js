import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
      console.log(productos1);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [item]);

  console.log(item);
  return (
    <div className="detailcontent">
      <h2>{productos1.title}</h2>
      <div className="product mx-2 my-sm-2 ">
        <Card style={{ width: "18rem", heigth: "500px" }}>
          <Card.Img variant="top" src={productos1.images ? productos1.images : " "} />
          <Card.Body  style={{ background: "lightblue", color: "black" }}>
            <Card.Title>{productos1.title}</Card.Title>
            <Card.Text >{productos1.description}</Card.Text>
            <h4>
              Id:{productos1.id} Precio: {productos1.price}
            </h4>
            <Button size="sm" variant="outline-dark">
              Agregar
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
