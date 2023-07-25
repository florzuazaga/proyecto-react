import React, { useState, useEffect } from "react";
import itemList from "../CartWidget/itemList";
import Titulo from "../Titulo";

export const ItemlistContainer = ({ texto }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData.then((res) => setData(res));
  }, []);

  return (
    <>
      <Titulo grreting={texto} />
      <itemList data={data} />
    </>
  );
};
export default ItemlistContainer;
