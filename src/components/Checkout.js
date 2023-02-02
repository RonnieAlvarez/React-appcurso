import React, { useEffect, useRef } from "react";
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
import { Button, Table } from "react-bootstrap";
import { useReactToPrint } from "react-to-print";

export const Checkout = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "CheckOut",
    onAfterPrint: () => {
      console.log("Printed");
    },
    // Notify.success("CheckOut Impreso", { timeout: 1000 })
  });
  // eslint-disable-next-line
  const {
    cart,
    vtotal,
    cantArticulos,
    formatNumber,
    tempo,
    vaciarCarrito,
    check,
    checklisto,
    idorderlisto,
    idorder,
  } = useContext(contexto);
  const { currentUser } = useAuthValue();
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [vcart, setVcart] = useState("");
  const [idref, setIdref] = useState("");
  const navigate = useNavigate();
  const orderscollection = collection(db, "orders");
  let tokyoId = "";
  const MySwal = withReactContent(Swal);

  // const ReactPdfPrint = () => {
  // };

  const confirmCkout = () => {
    // numOrden(idref);
    if (!check) {
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
          // vaciarCarrito();
          checklisto(true);
          // navigate("/");
        }
      });
    } else {
      alert(`id: ${idref}`);
    }
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
      idorderlisto(tokyoId);
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
    <>
      <div
        
        style={{ width: "100%", heigth: window.innerHeight }}
      >
        <div
          id="orden"
          className=" bg-light w-50 mx-auto my-3 rounded bg-opacity-75"
        >
          <div className=" Row h-100  d-flex flex-row  align-items-center justify-content-around">
            <div ref={componentRef}  style={{ width: "100%", heigth: window.innerHeight, color:"black" }} className={`d-flex flex-column justify-content-center w-75 ${idorder ? "bg-light text-dark " : "bg-info" }`}>
              <h2
                className={` bg-opacity-50 align-items-center text-center rounded py-1 ${
                  idorder ? "bg-warning" : "bg-primary"
                }`}
              >
                {" "}
                ChekOut de la Compra
              </h2>
              <p
                className={`text-center bg-opacity-50 rounded ps-1 ${
                  idorder ? "bg-danger" : "bg-primary"
                }`}
              >
                {`${idorder ? "Id: " : ""}`}
                <strong>{idorder}</strong>
              </p>
              <p className="text-center">Los datos finales de su compra son los siguientes:</p>
              <div className="Row d-flex flex-row  align-items-center justify-content-around">
                <div className="col-6">
                  Usuario actual :{" "}
                  <font size={4} color={"#17202A "}><strong>
                    {currentUser?.email}</strong>
                  </font>{" "}
                </div>
              </div>
              <form
                name="chekout_form"
                className="d-flex flex-column "
                
                // onSubmit={store}
              >
                <div className="Row d-flex flex-row  align-items-center justify-content-around">
                  <input
                    className="w-50 me-1 mb-1 rounded text-primary"
                    value={nombre}
                    type="text"
                    required
                    placeholder="Digite su nombre y apellidos"
                    onChange={(e) => setNombre(e.target.value)}
                  />

                  <input
                    className="w-25 mb-1 rounded text-primary"
                    value={telefono}
                    type="text"
                    required
                    placeholder="Digite el telefono"
                    onChange={(e) => setTelefono(e.target.value)}
                  />
                </div>
              </form>
              <Table variant="primary" className="w-100 mx-auto" bordered  >
                <thead className="text-center">
                  <th>Linea</th>
                  <th>Id</th>
                  <th>Articulo</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                  <th>Total</th>
                </thead>
                <tbody>
                  {cart.map((item, i) => {
                    return (
                      <tr key={i}>
                        <td className="text-center">{i + 1}</td>
                        <td>{item.id.substring(0, 5)}</td>
                        <td>{item.titulo}</td>
                        <td className="text-center">{item.cantidad}</td>
                        <td className="text-end">{item.precio}</td>
                        <td className="text-end">
                          {item.cantidad * item.precio}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              <div className="col text-end me-2">
                <span className="me-2">
                  Cantidad Articulos:{"\u00A0"}{" "}
                  <font size={4} color={"#17202A"}>
                    {cantArticulos}{" "}
                  </font>{" "}
                </span>
                <span>
                  Total de la compra:{"\u00A0"} {formatNumber(vtotal)}
                </span>
              </div>
              <div className="Row d-flex flex-row  align-items-center justify-content-around ">
                <button
                  className={`btn w-25 btn-sm my-2 fs-4 mb-3 ${
                    idorder ? "disabled btn-secondary text-dark" : "btn-primary"
                  } `}
                  onClick={confirmCkout}
                >
                  {`${idorder ? "Finalizado " : "Finalizar"}`}
                </button>
                <button
                  className="py-0 w-25 btn btn-secondary my-2 mb-3 fs-4 btn-sm"
                  onClick={() => navigate(-1)}
                >
                  Regresar <FaBackward />
                </button>
                {/* {`${idref ? vaciarCarrito()  : ""}`}  */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {idorder ? 

      <div className="d-flex justify-content-center align-items-center">
      <Button
        onClick={handlePrint}
        className={`btn btn-sm  ${
          idorder ? "btn-primary": "disabled btn-secondary text-dark"
        } `}
      >
        Imprimir Pdf
      </Button>
      </div>  : ''
      }
    </>
  );
};
