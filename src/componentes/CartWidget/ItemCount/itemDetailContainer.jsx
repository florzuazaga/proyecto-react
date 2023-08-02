import React, { useEffect, useState } from "react";

import ItemDetail from "../ItemDetail";

const film = {
  id: 1,
  price: 5000,
  image: "https://i.postimg.cc/D0bpFXyj/descarga.jpg",
  title: "sarten",
};
export const ItemDetailContainer = () => {
  const [data, SetData] = useState({});
  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(film);
      }, 3000);
    });
    getData.then((res) => SetData(res));
  }, []);
  return (
    <div>
      <ItemDetail data={data} />
    </div>
  );
};
export default ItemDetailContainer;
