import React, { useEffect } from "react";
import { contexto } from "../context/CustomProvider";
import { useContext, useState } from "react";
import { useAuthValue } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./../firebase";
import { FaBackward } from "react-icons/fa";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Notify } from "notiflix";

export const Checkout = () => {
  const { cart, vtotal, cantArticulos, formatNumber, tempo, vaciarCarrito } =
    useContext(contexto);
  const { currentUser } = useAuthValue();
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [vcart, setVcart] = useState("");
  const [idref, setIdref] = useState("");
  const navigate = useNavigate();
  const orderscollection = collection(db, "orders");
  let tokyoId = "";
  const MySwal = withReactContent(Swal);


  const confirmCkout = () => {
    // numOrden(idref);
    MySwal.fire({
      title: "Hacer CheckOut?",
      text: "No podra revertir esta opción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Hacer ChekOut!",
    }).then((result) => {
      if (result.isConfirmed) {
        store();
        Swal.fire(`CheckOut!`, "Su compra a sido Realizada.", "success");
        tempo();
        vaciarCarrito();
        navigate("/");
      }
    });
  };
  const store = async () => {
    // e.preventDefault();
    const timestamp = Date.now();
    const fecha = (timestamp) => {
      const options = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      return new Date(timestamp).toLocaleDateString(undefined, options);
    };

    const data = {
      email: currentUser?.email,
      cantidad: cantArticulos,
      total: vtotal,
      nombre: nombre,
      telefono: telefono,
      articulos: vcart,
      timestamp: fecha(timestamp),
    };
    // eslint-disable-next-line
    const res = await addDoc(orderscollection, {
      data,
    }).then((res) => {
      tokyoId = res.id;
      setIdref(tokyoId);
      
    });
    //navigate("/");
    //return <Refercheckout  referencia= {tokyoId}/>
  };

  const auxcart = () => {
    let auxs = JSON.stringify(cart).toString();
    setVcart(auxs);
  };
  useEffect(() => {
    auxcart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="orden" className="center bg-info w-50 mx-auto my-3 rounded bg-opacity-75">
      <div className=" Row h-100 w-75 d-flex flex-row  align-items-center justify-content-around">
        <div className="d-flex flex-column justify-content-center ">
          <h2
            className={` bg-opacity-50 align-items-center rounded ps-2 ${
              idref ? "bg-warning" : "bg-primary"
            }`}
          >
            {" "}
            ChekOut de la Compra
          </h2>
          <p
            className={`text-center bg-opacity-50 rounded ps-1 ${
              idref ? "bg-danger" : "bg-primary"
            }`}
          >
            {`${idref ? "Id: " : ""}`}
            {idref}
          </p>
          <p>Los datos finales de su compra son los siguientes:</p>
          <ul>
            <li>
              Usuario actual :{" "}
              <font size={4} color={"#17202A "}>
                {currentUser?.email}
              </font>{" "}
            </li>
            <li>
              Cantidad Articulos:{"\u00A0"}{" "}
              <font size={4} color={"#17202A"}>
                {cantArticulos}{" "}
              </font>{" "}
            </li>
            <li>
              Total de la compra:{"\u00A0"} {formatNumber(vtotal)}
            </li>
          </ul>
          <form
            name="chekout_form"
            className="d-flex flex-column"
            // onSubmit={store}
          >
            <input
              className="w-100 mb-1 rounded"
              value={nombre}
              type="text"
              required
              placeholder="Digite su nombre y apellidos"
              onChange={(e) => setNombre(e.target.value)}
            />

            <input
              className="w-100 rounded"
              value={telefono}
              type="text"
              required
              placeholder="Digite el telefono"
              onChange={(e) => setTelefono(e.target.value)}
            />
          </form>
          <button
            className={`btn  btn-sm my-3 fs-4 ${
              idref ? "disabled btn-secondary text-dark" : "btn-primary"
            } `}
            onClick={confirmCkout}
          >
            {`${idref ? "Finalizado " : "Finalizar"}`}
          </button>
          <button
            className="py-0 btn btn-secondary btn-sm"
            onClick={() => navigate(-1)}
          >
            Regresar <FaBackward />
          </button>
          {/* {`${idref ? vaciarCarrito()  : ""}`}  */}
        </div>
      </div>
    </div>
  );
};
