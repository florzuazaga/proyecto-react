import React, { useState, useEffect } from "react";
import ItemList from "./ItemList/ItemList";
import Titulo from "../Titulo";
import ItemCount from "../CartWidget/ItemCount/ItemCount";
import { getData } from "../../Data/producto";
const films = [
  {
    id: 1,
    price: 50000,
    image: "https://i.postimg.cc/D0bpFXyj/descarga.jpg",
    title: "sarten",
  },
  {
    id: 2,
    price: 70000,
    image: "https://i.postimg.cc/J0WYrhDR/images.jpg",
    title: "cacerola cuadrada",
  },
  {
    id: 3,
    price: 80000,
    image: "https://i.postimg.cc/4N7BhVGB/Cacerola-28-Cherry.png",
    title: "cacerola 28cm",
  },
];
export const ItemlistContainer = ({ texto }) => {
  const onAdd = (quantity) => {
    console.log(`compraste ${quantity} unidades`);
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(films);
      }, 3000);
    });
    getData.then((res) => setData(res));
  }, []);

  return (
    <>
      <Titulo grreting={texto} />
      <ItemCount initial={3} stock={5} onAdd={onAdd} />
      <ItemList data={data} />
      {data.length == 0 ? <h1>Cargando</h1> : <ItemList data={data} />}
    </>
  );
};
export default ItemlistContainer;
