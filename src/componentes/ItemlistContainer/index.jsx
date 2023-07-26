import React, { useState, useEffect } from "react";
import ItemList from "../CartWidget/ItemList/ItemList";
import Titulo from "../Titulo";
import { getData } from "../../Data/producto";

export const ItemlistContainer = ({ texto }) => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    getData.then((res) => setData(res));
  }, []);

  return (
    <>
      <Titulo grreting={texto} />
      {data.length == 0 ? <h1>Cargando</h1> : <ItemList data={data} />}
    </>
  );
};
export default ItemlistContainer;
