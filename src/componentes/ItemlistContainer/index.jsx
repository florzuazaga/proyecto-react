import React, { useState, useEffect } from "react";
import ItemList from "../CartWidget/ItemList";
import Titulo from "../Titulo";
import { getData } from "../../Data/producto";

export const ItemlistContainer = ({ texto }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData.then((res) => setData(res));
  }, []);

  return (
    <>
      <Titulo grreting={texto} />
      <ItemList data={data} />
    </>
  );
};
export default ItemlistContainer;
