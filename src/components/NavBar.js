import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import logo from "./comp_imgs/logo-mel.svg";
import { CartWidget } from "./CartWidget";
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className="Header">


<Nav className="bg-dark w-100">
        <Container className="d-flex bg-dark w-100 align-items-center justify-content-around">
          <img src={logo} className="logo" alt="Logo Mel online store" />
         
          <Link className="beauty-spa fs-md-2 fs-sm-5 " to="/">Mel On-line Store</Link>
           <Link className="btn btn-outline-info btn-sm" to="/main/1">Clothes</Link>
           <Link className="btn btn-outline-info btn-sm" to="/main/2">Electronics</Link>
           <Link className="btn btn-outline-info btn-sm" to="/main/3">Furniture</Link>
           <Link className="btn btn-outline-info btn-sm" to="/main/4">Shoes</Link>
           
              <Link className="btn btn-outline-warning btn-sm" to="/">Ir al Carrito</Link>
            

          <CartWidget/>
        </Container>
        </Nav>
      </div>


  );
};

export default NavBar;