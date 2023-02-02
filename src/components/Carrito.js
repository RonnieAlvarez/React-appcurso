import React from "react";
import { useContext } from "react";
import { contexto } from "../context/CustomProvider";
import { CartItems } from "./CartItems";
import { useAuthValue } from "../AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Notify } from "notiflix";
import { FaBackward, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
// import { Confirm } from 'notiflix';

// import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

export const Carrito = () => {
  const { cart, vtotal, cantArticulos, vaciarCarrito, formatNumber,tempo } =
    useContext(contexto);
  const { currentUser } = useAuthValue();
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  
  const confirmDelete = () => {
    MySwal.fire({
      title: "Desea Vaciar el Carrito?",
      text: "No podra revertir esto borrado!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Borrarlo!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Borrado!", "Su compra a sido borrada.", "success");
        vaciarCarrito();
        tempo();
        navigate("/");
      }
    });
  };

  const retorno = () => {
    if (cantArticulos === 0) {
      Notify.failure("Carrito Vacio", { timeout: 1000 });
      tempo();
    }
  };


  retorno();


  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h2>Carrito de compras: </h2>{" "}
      <span>
        Usuario actual : {currentUser?.email}{" "}
        <button
          className="ms-2 py-0 btn btn-outline-warning btn-sm "
          onClick={() => signOut(auth)}
        >
          Sign Out
        </button>
      </span>
      <div className="content d-flex flex-row justify-content-center align-items-center">
        {cart.map((item, i) => (
          <div className="cart-item" key={i}>
            <CartItems item={item} />
          </div>
        ))}
        <div className="cart-item Row w-750 d-flex flex-row  align-items-center justify-content-around">
          <span className="Col text-dark img-item">
            Cantidad Articulos:{"\u00A0"} {cantArticulos} {"\u00A0"}
            {"\u00A0"} Total de la Compra: {"\u00A0"} {formatNumber(vtotal)}
          </span>

          <Link
            className={`btn btn-warning ${
              cantArticulos === 0 ? "disabled" : ""
            } `}
            to="/checkout"
          >
            Checkout
          </Link>
          <button
            className="py-0 btn btn-outline-secondary btn-sm"
            onClick={() => navigate(-1)}
          >
            Regresar <FaBackward />
          </button>

          <button
            className={` btn btn-outline-danger ${
              cantArticulos === 0 ? "disabled" : ""
            } `}
            onClick={() =>confirmDelete()}
          >
            Vaciar <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
