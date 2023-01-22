/**
 * It renders a NavBar with a logo, a title, and a few buttons.
 * @returns A NavBar component that is being exported.
 */
import React from "react";
import Nav from "react-bootstrap/Nav";
import logo from "./comp_imgs/logo-mel.svg";
import { CartWidget } from "./CartWidget";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="Header">
      <Nav className="bg-dark w-100 d-flex">
        <div className="d-flex bg-dark w-100 align-items-center justify-content-around">
          <img src={logo} className="logo" alt="Logo Mel online store" />

          <Link className="beauty-spa fs-2 fs-md-2 fs-sm-5 " to="/">
            Mel On-line Store
          </Link>
          <Link className="btn btn-outline-info btn-sm" to="/main/1">
            Ropa
          </Link>
          <Link className="btn btn-outline-info btn-sm" to="/main/2">
            Electronicos
          </Link>
          <Link className="btn btn-outline-info btn-sm" to="/main/3">
            Muebles
          </Link>
          <Link className="btn btn-outline-info btn-sm" to="/main/4">
            Zapatos
          </Link>
          <Link className="btn btn-outline-info btn-sm" to="/main/0">
            Todo
          </Link>
          <Link className="btn btn-outline-warning btn-sm" to="/Carrito">
            Ir al Carrito
          </Link>

          <CartWidget />
        </div>
      </Nav>
    </div>
  );
};

export default NavBar;
