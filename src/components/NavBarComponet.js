import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Badge from "react-bootstrap/Badge";
import logo from "./comp_imgs/logo-mel.svg";
import shoppingCart from "./comp_imgs/shopping_cart.svg";

export const NavBarComponet = () => {
  return (
    <div>
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
              <Nav.Link href="#tratamientos">Tratamientos</Nav.Link>
              <NavDropdown title="Productos" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
            </Navbar.Collapse>

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
        </Container>
      </Navbar>

      <hr />
    </div>
  );
};

export default NavBarComponet;
