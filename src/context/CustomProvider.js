import { createContext, useState } from "react";

export const contexto = createContext()

const { Provider } = contexto

const CarritoProvider = ({children}) => {
    const [cantidad,setCantidad]= useState(0)
    const [acumulador,setAcumulador]= useState(cantidad)


    const agregarProducto = (cantidad)=>{
        setCantidad(cantidad)
        setAcumulador(acumulador+cantidad)
        console.log(cantidad)
        console.log(acumulador)
    }


    const valorDelContexto = {
       cantidad,
       acumulador,
        agregarProducto,
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CarritoProvider





