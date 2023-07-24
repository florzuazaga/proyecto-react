import React, { useState, useEffect } from "react";

import itemList from "../CartWidget/itemList";
import Titulo from "../Titulo";

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
