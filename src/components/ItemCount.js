import React from "react";
import Button from "react-bootstrap/Button";
import { useState,useContext } from "react";
import { contexto } from "../context/CustomProvider";
import cartPlus from "./comp_imgs/cartplus.svg"
import cartMenos from "./comp_imgs/cartmenos.svg"


const ItemCount = (props) => {
const {stock} = props
const {agregarProducto}= useContext(contexto)
const [contador, setContador] = useState(1);

console.log(props)
  const handleSumar = () => {
    if (contador<stock){
      setContador(contador + 1)
    }
  };
  const handleRestar = () => {
    setContador(contador - 1)
  };
 
  const handleConfirmar= () =>{
    agregarProducto(contador) 
 
  }
  const handleResetear=()=>{
    setContador(0)
  }
  

  return (
    <div className="my-2">
    <div>
      <Button disabled={contador<=1} onClick={handleRestar} size="sm" variant="danger" className="py-0">
      <img src={cartMenos} width="15px" />
      </Button>
      <span className="mx-2">cantidad : {contador}</span>
      <Button onClick={handleSumar} size="sm" variant="primary" className="py-0 ">
      <img src={cartPlus} width="15px" />
      </Button>
      </div>
      <div>
    <Button onClick={handleResetear}  size="sm" variant="warning" className="me-1 py-0">Resetear</Button>
      <Button onClick={handleConfirmar} size="sm" variant="success" className="ms-1 py-0">Confirmar</Button>
      </div>
    </div>
  );
};
export default ItemCount;;
