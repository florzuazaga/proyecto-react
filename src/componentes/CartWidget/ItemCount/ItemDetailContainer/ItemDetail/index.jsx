import React from "react";

export const ItemDetail = (data) => {
  return (
    <div className="container">
      <div className="datail">
        <img className="datail_image" src="{data.image}" alt="" />
        <div className="content">
          <h1>{data.titulo}</h1>
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;
