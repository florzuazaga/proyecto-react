import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Titulo from "../Titulo";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useParams } from "react-router-dom";

export const ItemlistContainer = ({ texto }) => {
  const [data, setData] = useState([]);
  const { catalogoId } = useParams();
  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "productos");

    if (catalogoId) {
      const queryFiltro = query(
        queryCollection,
        where("category", "==", catalogoId)
      );
      getDocs(queryFiltro).then((res) =>
        setData(
          res.docs.map((producto) => ({ id: producto.id, ...producto.data() }))
        )
      );
    } else {
      getDocs(queryCollection).then((res) =>
        setData(
          res.docs.map((producto) => ({ id: producto.id, ...producto.data() }))
        )
      );
    }
  }, [catalogoId]);

  return (
    <>
      <Titulo grreting={texto} />

      <ItemList data={data} />
      {data.length == 0 ? <h1>Cargando</h1> : <ItemList data={data} />}
    </>
  );
};
export default ItemlistContainer;
