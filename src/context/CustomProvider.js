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
  const [check, setCheck] = useState(false);
  const [idorder, setIdorder] = useState("");

  useEffect(() => {
    if (localStorage.getItem("cart") !== null) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
    return;
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    setVtotal(
      cart.reduce((prev, next) => {
        return prev + next.cantidad * next.precio;
      }, 0)
    );
    setCantArticulos(
      cart.reduce((prev, next) => {
        return prev + next.cantidad;
      }, 0)
    );
    return;
  }, [cart]);

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

  const hbuscar = (nid) => {
    const resultado = cart.find((cart) => cart.id === nid) ? true : false;
    return resultado;
  };

  const agregarProducto = (newCantidad, newItem, price, title, images) => {
    if (!hbuscar(newItem)) {
      setCart([
        ...cart,
        {
          id: newItem,
          cantidad: newCantidad,
          precio: price,
          titulo: title,
          img: images,
        },
      ]);
    } else {
      setCantidad(cantidad + newCantidad);
      buscarIdActualiza(newItem, newCantidad);
    }
    return;
  };

  const eliminarProducto = (id) => {
    const newCart = cart.filter((cart) => cart.id === id);
    setCart(newCart);
  };

  const tempo = () => {
    setTimeout(() => {}, 2000);
  };

  const checklisto = (chk) => {
    setCheck(chk);
  };
  const idorderlisto = (id) => {
    setIdorder(id);
  };
  const vaciarCarrito = () => {
    setCart([]);
    setIdorder("");
    checklisto(false);
  };

  const formatNumber = (number) => {
    return number ? (
      <span style={{ color: "blue" }}>
        {new Intl.NumberFormat("ES-US", {
          style: "currency",
          currency: "USD",
        }).format(number)}
      </span>
    ) : null;
  };
  const valorDelContexto = {
    cart,
    cantidad,
    agregarProducto,
    eliminarProducto,
    vaciarCarrito,
    vtotal,
    cantArticulos,
    formatNumber,
    tempo,
    check,
    checklisto,
    idorder,
    idorderlisto,
  };

  return <Provider value={valorDelContexto}>{children}</Provider>;
};

export default CarritoProvider;
