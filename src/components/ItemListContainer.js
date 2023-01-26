import { ItemList } from './ItemList';
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from './../firebase';
import { collection, doc, getDocs,query,where} from 'firebase/firestore';


export const ItemListContainer = (props) => {
  const [cargo, setCargo] = useState(false);
  const [productos, setProductos] = useState([]);
const {categoria } = useParams();
  //pasar un string a number?
  const categoriaParam = parseInt(categoria)

  console.log(categoriaParam)

  const catname = [
    "Todas las Categorias",
    "Ropa",
    "Electronicos",
    "Muebles",
    "Zapatos",
  ];
  const productsCollection=(collection(db,"products"))
  
  const getProducts = async () => {
  let data = await getDocs(productsCollection);
    if (categoriaParam > 0 && categoriaParam < 5) {
      const q = query(productsCollection,where("categoria","==",categoriaParam));
      data = await getDocs(q);
    }
    setProductos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setCargo(true);
  };

  console.log(categoriaParam)
  useEffect(() => {
    getProducts();
  }, [categoriaParam]);

  //como filtrar basedatos de firebase por un campo espefifico?

  return (<>
      <h2 className="mb-1 d-flex align-item-start ms-3">
        {props.greeting} {!cargo ? "Cargando..." : ""}{" "}
        {catname[categoriaParam] ? catname[categoriaParam] : catname[0]}
      </h2>
      <ItemList   cargo={cargo} productos={productos} key={doc.id} />;
  </>
  )
};

export default ItemListContainer;
