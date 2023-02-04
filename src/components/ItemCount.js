import React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import cartPlus from "./comp_imgs/cartplus.svg";
import cartMenos from "./comp_imgs/cartmenos.svg";
import { useCarrito } from "../context/CustomProvider";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../auth/AuthContext";
import { Notify } from "notiflix";
import { FaBackward } from "react-icons/fa";

const ItemCount = (props) => {
  const { agregarProducto } = useCarrito();
  const [contador, setContador] = useState(1);
  const navigate = useNavigate();
  const { currentUser } = useAuthValue();

  const handleSumar = () => {
    if (contador < props.producto.stock) {
      setContador(contador + 1);
    }
  };
  const handleRestar = () => {
    setContador(contador - 1);
  };

  const handleConfirmar = () => {
    agregarProducto(
      contador,
      props.producto.id,
      props.producto.price,
      props.producto.title,
      props.producto.images,
      props.stock - contador
    );
    Notify.success("Articulo Agregado");
  };
  const handleResetear = () => {
    setContador(0);
  };
  const ButtonStyle = {
    borderRadius: "4px",
    color: "blue",
    padding: "0.4rem",
    margin: "0.5rem",
  };

  return (
    <>
      <div className="my-2">
        <div>
          <Button
            disabled={contador <= 1}
            onClick={handleRestar}
            size="sm"
            variant="danger"
            className="py-0 mb-1"
          >
            <img src={cartMenos} width="15px" alt="Restar Items" />
          </Button>
          <span className="mx-2">cantidad : {contador}</span>
          <Button
            onClick={handleSumar}
            size="sm"
            variant="primary"
            className="py-0 mb-1"
          >
            <img src={cartPlus} width="15px" alt="Agregar Items" />
          </Button>
        </div>
        <div>
          <Button
            onClick={handleResetear}
            size="sm"
            variant="warning"
            className="me-1 py-0"
          >
            Resetear
          </Button>
          <Button
            onClick={handleConfirmar}
            size="sm"
            variant="success"
            className="ms-1 py-0"
          >
            Confirmar
          </Button>
        </div>
      </div>
      <div className="container">
        Usuario:{" "}
        {currentUser?.emailVerified
          ? currentUser?.email
          : "Usuario no Registrado"}
      </div>
      <div className="d-flex w-100  justify-content-center ">
        <button
          className="mt-1 py-0 btn btn-outline-secondary btn-sm"
          onClick={() => navigate(-1)}
          style={ButtonStyle}
        >
          Regresar <FaBackward />
        </button>
      </div>
    </>
  );
};
export default ItemCount;
