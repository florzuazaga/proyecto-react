import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Titulo from "../Titulo";

import { useParams } from "react-router-dom";
const ollas = [
  {
    id: 1,
    price: 50000,
    image: "https://i.postimg.cc/D0bpFXyj/descarga.jpg",
    category: "pormenor",
    title: "sarten",
  },
  {
    id: 2,
    price: 70000,
    image: "https://i.postimg.cc/J0WYrhDR/images.jpg",
    category: "pormayor",
    title: "cacerola cuadrada",
  },
  {
    id: 3,
    price: 80000,
    image: "https://i.postimg.cc/4N7BhVGB/Cacerola-28-Cherry.png",
    category: "pormenor",
    title: "cacerola 28cm",
  },
];
export const ItemlistContainer = ({ texto }) => {
  const [data, setData] = useState([]);
  const { catalogoId } = useParams();
  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(ollas);
      }, 3000);
    });
    if (catalogoId) {
      getData.then((res) =>
        setData(res.filter((olla) => olla.category === catalogoId))
      );
    } else {
      getData.then((res) => setData(res));
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
