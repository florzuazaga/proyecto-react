import React from "react";
import ItemCount from "../ItemCount/ItemCount";
export const ItemDetail = (data) => {
  const onAdd = (quantity) => {
    console.log(`compraste ${quantity} unidades`);
  };
  return (
    <div className="container">
      <div className="datail">
        <img className="datail_image" src="{data.image}" alt="" />
        <div className="content">
          <h1>{data.titulo}</h1>
          <ItemCount initial={3} stock={5} onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;
