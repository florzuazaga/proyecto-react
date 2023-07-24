import React, { useEffect, useState } from "react";

import ItemDetail from "../ItemDetail";
const films = {
  id: 1,
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
    getData.then((res) => setData(res));
  });

  return (
    <div>
      <ItemDetail data={data} />
    </div>
  );
};
export default ItemDetailContainer;
