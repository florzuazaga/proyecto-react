import React from "react";
import { useCartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();
  return <div>Cart</div>;
};
export default Cart;
