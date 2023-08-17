import React from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/itemCart";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, totalPrecio } = useCartContext();
  const compra = {
    buyer: {
      name: "florencia",
      email: "florenciazuazaga47@gmail.com",
      phone: "3435191593",
      adress: "9 de julio 2017",
    },
    items: cart.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: product.quantity,
    })),
    total: totalPrecio(),
  };
  const handleClick = () => {
    const db = getFirestore();
    const comprasCollection = collection(db, "compras");
    addDoc(comprasCollection, compra).then(({ id }) => console.log(id));
  };
  if (cart.length === 0) {
    return (
      <>
        <p>No hay productos agregados</p>
        <Link to="/">Seguir comprando</Link>
      </>
    );
  }
  return (
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p>total:{totalPrecio()}</p>
      <button onClick={handleClick}>compra</button>
    </>
  );
};
export default Cart;
