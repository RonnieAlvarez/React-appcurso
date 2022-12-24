import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./comp_imgs/logo-mel.svg";
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <div className="Header">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        className="menu"
        variant="dark"
      >
        <Container className="d-sm-flex justify-content-sm-center">
          <img src={logo} className="logo" alt="Logo Mel Beauty & Spa" />
          <Navbar.Brand className="beauty-spa fs-md-2 fs-sm-5 " href="#home">
            Mel Beauty & Spa
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#tratamientos">Ubicación</Nav.Link>
              <NavDropdown title="Productos" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Para el Cabello</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                 Para la Cara
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">
                Perfumería H/M
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#carrito">Ir al Carrito</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <CartWidget />
        </Container>
      </Navbar>
      <hr />
    </div>
  );
};

export default NavBar;
