import React from "react";
import shoppingCart from "./comp_imgs/shopping_cart.svg";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";

export const CartWidget = () => {
  const [counter, setCounter] = useState(0);
  const handlerClick =() => { 
    setCounter(counter + 1) }

  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={shoppingCart}
              width="30"
              height="30"
              className="d-inline-block  position-relative"
              alt="Shopping Cart"
            />
            <span className="mt-1 fs-6 text-dark position-absolute top-25 start-75 translate-middle badgeColor">
              {counter} {/*// contador de articulo en el Carrito*/}
            </span>
          </Navbar.Brand>
          <button className="btn btn-info btn-sm" onClick={handlerClick}>+1</button>
        </Container>
      </Navbar>
    </div>
  );
};
