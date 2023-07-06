import React from "react";

export const CartWidget = () => {
  return (
    <>
      <div className="counter">
        <i className="bi bi-cart">🛒</i>
        <button>-</button>
        <span>2</span>
        <button>+</button>
      </div>
    </>
  );
};
export default CartWidget;
