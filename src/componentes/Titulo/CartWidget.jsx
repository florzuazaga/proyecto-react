import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Badge } from "react-bootstrap";
import { BsCart4 } from "react-icons/bs";

export const CartWidget = () => {
  const { totalProductos } = useCartContext();
  return (
    <div className="d-flex justify-content-around align-items-center">
      <BsCart4 fontSize={"1.5rem"} color="black" />
      {totalProductos() > 0 && <Badge bg="danger">{totalProductos()}</Badge>}
    </div>
  );
};
export default CartWidget;
