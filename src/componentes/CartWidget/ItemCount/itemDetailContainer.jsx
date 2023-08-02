import React, { useEffect, useState } from "react";

import ItemDetail from "../ItemDetail";
import ItemList from "../../ItemlistContainer/ItemList/ItemList";

const films = {
  id: 1,
  price: 5000,
  image: "https://i.postimg.cc/D0bpFXyj/descarga.jpg",
  title: "sarten",
};
export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
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
      <ItemDetail data={data} />
    </div>
  );
};
export default ItemDetailContainer;
