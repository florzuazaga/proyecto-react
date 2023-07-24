import React, { useState, useEffect } from "react";
import ItemCount from "../ItemCount";
import itemList from "../CartWidget/itemList";
import Titulo from "../Titulo";
const films = [
  {
    id: 1,
    category: "",
    image: "./public/img/descarga.jpg",
    title: "sarten",
  },
  {
    id: 2,
    category: "",
    image: "./public/img/imagenes.jpg",
    title: "cacerola cuadrada",
  },
  {
    id: 3,
    category: "",
    image: "./public/img/Cacerola_28_Cherry.png",
    title: "cacerola 28cm",
  },
];
export const ItemlistContainer = ({ texto }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(films);
      }, 3000);
    });
    getData.then((res) => setData(res));
  }, []);
  const onAdd = (quantity) => {
    console.log(`compraste ${quantity} unidades`);
  };
  return (
    <>
      <Titulo grreting={texto} />
      <ItemCount initial={3} stock={5} onAdd={onAdd} />
      <itemList data={data} />
    </>
  );
};
export default ItemlistContainer;
