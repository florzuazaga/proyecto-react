import Item from "./Item/index";
import React from "react";
const ItemList = ({ data }) => {
  return data.map((olla) => <Item key={olla.id} info={olla} />);
};
export default ItemList;
