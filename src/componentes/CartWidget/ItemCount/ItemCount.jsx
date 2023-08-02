import React, { useState, useEffect } from "react";

export const ItemCount = ({ initial, productos, onAdd }) => {
  const [count, setCount] = useState(parseInt(initial));
  const decrease = () => {
    setCount(count - 1);
  };
  const increase = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial]);
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
      <div>
        <button disabled={productos <= 0} onClick={() => onAdd(count)}>
          Agregar
        </button>
      </div>
    </>
  );
};
export default ItemCount;
