import React from "react";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/itemCart";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();
  if (cart.length === 0) {
    return (
      <>
        <p>No hay productos agregados</p>
        <Link to="/">Seguir comprando</Link>
      </>
    );
  }
  return cart.map((product) => <ItemCart key={product.id} product={product} />);
};
export default Cart;
