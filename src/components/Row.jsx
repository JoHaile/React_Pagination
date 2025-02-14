import React from "react";

export default function Row({ handleIncrement, handleD, handleDelete, input }) {
  function handleZeros() {
    return input === 0 ? "zero" : input;
  }
  return (
    <div>
      <span>{handleZeros()}</span>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleD}>-</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
