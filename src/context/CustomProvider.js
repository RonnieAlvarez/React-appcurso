import { createContext, useState, useContext, useEffect } from "react";


export const contexto = createContext();
const { Provider } = contexto;

export const useCarrito = () => {
  const valorDelContexto = useContext(contexto);
  return valorDelContexto;
};

const CarritoProvider = ({ children }) => {
  const [cantidad, setCantidad] = useState(0);
  const [cantArticulos, setCantArticulos] = useState(0);
  const [vtotal, setVtotal] = useState(0);
  const [cart, setCart] = useState([]);

/* Saving the cart in the local storage. */
  useEffect(() => {
    if (localStorage.getItem("cart") !== null) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
    return;
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    setVtotal(cart.reduce((prev, next) => {return prev + next.cantidad * next.precio}, 0));
    setCantArticulos(cart.reduce((prev, next) => {return prev + next.cantidad}, 0));
    return;
  }, [cart]);

/**
 * If the id of the item in the cart matches the id of the item that was clicked, then update the
 * quantity of that item in the cart.
 * @param id - id of the product
 * @param newCantidad - is the number that the user enters in the input field
 */
  const buscarIdActualiza = (id, newCantidad) => {
    const newCart = cart.map((cart) => {
      if (cart.id === id) {
        return {
          ...cart,
          cantidad: cantidad + newCantidad,
          
        };
      }
      return cart;
    });
    setCart(newCart);
  };

/**
 * It returns true if the cart array contains an object with the same id as the nid parameter,
 * otherwise it returns false.
 * @param nid - id of the product
 * @returns a boolean value.
 */
  const hbuscar = (nid) => {
    const resultado = cart.find((cart) => cart.id === nid) ? true : false;
    return resultado;
  };

/**
 * If the item is not in the cart, add it. If it is, update the quantity.
 * @param newCantidad - The quantity of the item to be added to the cart.
 * @param newItem - is the id of the product
 * @returns undefined.
 */
  const agregarProducto = (newCantidad, newItem,price,title,images) => {
    if (!hbuscar(newItem)) {
      //Si no esta el Item en el carrito lo agrega
      setCart([...cart, { id: newItem, cantidad: newCantidad, precio:price, titulo:title, img:images }]);
    } else {
      setCantidad(cantidad + newCantidad);
      buscarIdActualiza(newItem, newCantidad);
    }
    return;
  };

/**
 * The function takes an id as an argument, filters the cart array, and returns a new array with the
 * item that matches the id removed.
 * @param id - the id of the product
 */
  const eliminarProducto = (id) => {
    const newCart = cart.filter((cart) => cart.id === id);
    setCart(newCart);
  };

  
  const tempo = () => {
    setTimeout(() => {
      
    }, 2000);
  };

/**
 * Const vaciarProducto = () => {
 *     setCart([]);
 *   };
 */
  const vaciarCarrito = () => {
    setCart([]);
  };

/**
 * If the number is truthy, return a span with the number formatted as currency. Otherwise, return
 * null.
 * @param number - The number to format.
 * @returns A function that returns a span element with the number formatted as currency.
 */
 const formatNumber = (number) => {
    return (
    (number) ? 
        <span style={{ color: "blue" }}>
            {new Intl.NumberFormat("ES-US", {
            style: "currency",
            currency: "USD"
            }).format(number)}
        </span>
    : null
    );
}
  const valorDelContexto = {
    cart,
    cantidad,
    agregarProducto,
    eliminarProducto,
    vaciarCarrito,
    vtotal,
    cantArticulos,
    formatNumber,
    tempo
  };

  return <Provider value={valorDelContexto}>{children}</Provider>;
};

export default CarritoProvider;
