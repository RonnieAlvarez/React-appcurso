import React from "react";
import { useState, useEffect } from "react";
import { Usuarios } from "./Usuarios";
import { db } from "./../firebase";
import { collection, doc, getDocs, query, where } from "firebase/firestore";

export const UserListContainer = () => {
  const [cargo, setCargo] = useState(false);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const pedido = fetch(`https://api.escuelajs.co/api/v1/users`);
    pedido
      .then((response) => {
        const usuarios = response.json();
        return usuarios;
      })
      .then((usuarios) => {
        setUsuarios(usuarios);
        setCargo(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(usuarios);
  return (
    <div className="d-flex flex-column ">
      <h2 className="mb-1 d-flex align-item-start ms-3">
        {!cargo ? "Cargando..." : ""} Usuarios
      </h2>
      <div className="content">
        {usuarios.map((usuario) => (
          <div
            className="d-flex flex-column justify-content-center"
            key={usuario.id}
          >
            
            <Usuarios user={usuario} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserListContainer;
