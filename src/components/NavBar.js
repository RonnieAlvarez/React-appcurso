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
          <img src={logo} className="logo" alt="Logo Mel online store" />
          <Navbar.Brand className="beauty-spa fs-md-2 fs-sm-5 " href="#home">
            Mel On-line Store
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Productos" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Clothes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Electronics</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">Furniture</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Shoes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">Others</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#carrito">Ir al Carrito</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <CartWidget/>
        </Container>
      </Navbar>
    
    </div>
  );
};

export default NavBar;