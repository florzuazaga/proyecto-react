import React, { useEffect, useState } from "react";

import ItemDetail from "../ItemDetail";
const films = {
  id: 1,
  price: $5000,
  image: "./public/img/descarga.jpg",
  title: "sarten",
};
export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(films);
      }, 3000);
    });
  });

  return (
    <div>
      <ItemDetail data={data} />
    </div>
  );
};
export default ItemDetailContainer;
