import React from "react"
import shoppingCart from "./comp_imgs/shopping_cart.svg"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import { useContext } from "react"
import { contexto } from "../context/CustomProvider"
import { Link } from "react-router-dom"

export const CartWidget = () => {
  const { cantArticulos } = useContext(contexto)
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <Link to="/Carrito">
              <img
                src={shoppingCart}
                width="30"
                height="30"
                className="d-inline-block  position-relative"
                alt="Shopping Cart"
              />
              <span className="mt-1 fs-6 text-dark position-absolute top-25 start-75 translate-middle badgeColor">
                {cantArticulos ? cantArticulos : 0}{" "}
                {/*// contador de articulo en el Carrito*/}
              </span>
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}
