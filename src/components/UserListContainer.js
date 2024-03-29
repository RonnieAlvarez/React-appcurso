import React from "react";
import { useState, useEffect } from "react";
import { Usuarios } from "./Usuarios";
import { db } from "./../firebase";
import { collection, getDocs } from "firebase/firestore";

export const UserListContainer = () => {
  const [cargo, setCargo] = useState(false);
  const [usuarios, setUsuarios] = useState([]);

  const productsCollection = collection(db, "users");

  const getUsers = async () => {
    let data = await getDocs(productsCollection);
    setUsuarios(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setCargo(true);
  };

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="d-flex flex-column ">
      <h2 className="mb-1 d-flex align-item-start ms-3">
        {!cargo ? "Cargando..." : ""} Vendedores
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
