import Item from "../Item";
import React from "react";
const itemList = ({ data = [] }) => {
  return data.map((film) => <Item key={film.id} info={film} />);
};
export default itemList;
