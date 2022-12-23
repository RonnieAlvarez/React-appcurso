import React from "react";
import shoppingCart from "./comp_imgs/shopping_cart.svg";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";


export const CartWidget = () => {
  return (
    <div>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={shoppingCart}
              width="30"
              height="30"
              className="d-inline-block  position-relative"
              alt="Shopping Cart"
            />
            <Badge
              className="fs-6 text-dark position-absolute top-25 start-75 translate-middle"
              pill
              bg="info"
            >
              9
            </Badge>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};
