import Item from "../Item";
import React from "react";
const ItemList = ({ data = [] }) => {
  return (
    <div>
      {data.map((film) => (
        <Item key={film.id} info={film} />
      ))}
    </div>
  );
};
export default ItemList;
