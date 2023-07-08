import React, { useState } from "react";

export const CartWidget = ({ initial, productos, onAdd }) => {
  const [count, setCount] = useState(initial);
  const decrease = () => {
    setCount(count - 1);
  };
  const increase = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div className="counter">
        <i className="bi bi-cart"></i>
        <button disabled={count <= 1} onClick={decrease}>
          -
        </button>
        <span>{count}</span>
        <button disabled={count >= productos} onClick={increase}>
          +
        </button>
      </div>
    </>
  );
};
export default CartWidget;
