import React, { useEffect, useState } from "react";

import ItemDetail from "../ItemDetail";
import ItemList from "../ItemList/ItemList";
const films = [
  {
    id: 1,
    price: 5000,
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
export const ItemDetailContainer = () => {
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
    <div>
      <ItemList data={data} />
    </div>
  );
};
export default ItemDetailContainer;
