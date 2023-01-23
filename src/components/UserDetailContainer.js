import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { useParams } from "react-router-dom";
import UserDetail from "./UserDetail";

export const UserDetailContainer = () => {
  const [usuarios1, setUsuarios1] = useState([]);
  const { user } = useParams();
  
  useEffect(() => {
    let resto = "";
    if (user>=0) {
      resto = `${user}`;
    }
    const pedido = fetch(`https://api.escuelajs.co/api/v1/users/${resto}`);
    pedido
    .then((response) => {
      const usuarios = response.json();
      return usuarios;
    })
    .then((usuarios) => {
      setUsuarios1(usuarios);
  
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user]);

  
  return ( <UserDetail user={usuarios1}  /> );
};

export default UserDetailContainer;
