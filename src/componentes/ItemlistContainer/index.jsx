import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Titulo from "../Titulo";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";

export const ItemlistContainer = ({ texto }) => {
  const [data, setData] = useState([]);
  const { catalogoId } = useParams();
  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "productos");
    getDocs(queryCollection).then((res) =>
      res.docs.map((producto) => ({ id: producto.id, ...producto.data() }))
    );
    //if (catalogoId) {
    // getData.then((res) =>
    // setData(res.filter((olla) => olla.category === catalogoId)));
    //);
    //} else {
    // getData.then((res) => setData(res));
    // }
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
