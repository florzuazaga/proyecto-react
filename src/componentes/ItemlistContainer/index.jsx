import React, { useState, useEffect } from "react";

import ItemCount from "../ItemCount";
import itemList from "../CartWidget/itemList";
import Titulo from "../Titulo";
const films = [
  {
    id: 1,
    image: "https://ar.pinterest.com/pin/99712579237273967/",
    title: "sarten",
  },
  {
    id: 2,
    image: "https://ar.pinterest.com/pin/187180928255545340/",
    title: "cacerola cuadrada",
  },
  {
    id: 3,
    image: "https://ar.pinterest.com/pin/791578072019491863/",
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
