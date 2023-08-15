import React, { useEffect, useState } from "react";

import ItemDetail from "../ItemCount/ItemDetailContainer/ItemDetail/index";
import { useParams } from "react-router-dom";

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
  const [data, SetData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(films);
      }, 3000);
    });
    getData.then((res) =>
      SetData(res.find((film) => film.id === parseInt(id)))
    );
  }, []);
  return (
    <div>
      <ItemDetail data={data} />
    </div>
  );
};
export default ItemDetailContainer;
