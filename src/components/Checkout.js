import React, { useEffect } from "react";
import { contexto } from "../context/CustomProvider";
import { useContext,useState } from "react";
import { useAuthValue } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./../firebase"
import Refercheckout from "./Refercheckout";

function refcheckouts (ref) {

  return (
    <div className='center'>
   <h1>Referencia de su compra</h1>
   <p>{ref}</p>
   </div>
  ) 
 }

export const Checkout = () => {
  const { cart, vtotal, cantArticulos, formatNumber } = useContext(contexto);
  const { currentUser } = useAuthValue();
  const [nombre,setNombre] = useState('')
  const [telefono,setTelefono]= useState('')
  const [vcart,setVcart]= useState('')
  const navigate = useNavigate();
  const orderscollection = collection(db, "orders");
  
  
  let tokyoId = ''
  const store = async (e) => {
    e.preventDefault();
    await addDoc(orderscollection, {
        email: currentUser?.email,
        cantidad:cantArticulos,
        total:vtotal,
        nombre:nombre,
        telefono: telefono,
        articulos:vcart
    }).then(ref => {
        tokyoId = ref.id;
    })
    navigate("/");
  }
  
  // console.log("Added document with ID:", tokyoId)})
  const auxcart = ()=>{
    const auxs = (JSON.stringify(cart)).toString()
    setVcart(auxs)
  }
    //console.log(tokyoId);
    //<Refercheckout referencia= {tokyoId}/>
    // {<Refercheckout referencia= {tokyoId}/>}
   // refcheckout(tokyoId);
    useEffect(() => {
      auxcart() 
    },[]);

  return (
    <div className="center bg-info w-50 mx-auto my-3 rounded bg-opacity-75">
    <div className=" Row h-100 w-75 d-flex flex-row  align-items-center justify-content-around">
      <div className="d-flex flex-column justify-content-center align-it">
        <h2 className="bg-primary bg-opacity-50 rounded ps-2"> ChekOut de la Compra:</h2>
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
        <form name="chekout_form" className="d-flex flex-column" onSubmit={store}>
          <input className="w-100 mb-1 rounded" 
            value={nombre}
            type="text"
            required
            placeholder="Digite su nombre y apellidos"
            onChange={e => setNombre(e.target.value)}/>
          
          <input className="w-100 rounded" 
            value={telefono}
            type="text"
            required
            placeholder="Digite el telefono"
            onChange={e => setTelefono(e.target.value)}/>
          <button className=" btn btn-primary btn-sm my-3 fs-4" type='submit'>Finalizar</button>
          <Refercheckout referencia= {tokyoId}/>
        </form>
      </div>
    </div>
    </div>
  );
};
