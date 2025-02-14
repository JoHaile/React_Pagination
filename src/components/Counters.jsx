import React from "react";
import Counter from "./counter";

const Counters = ({
  counter,
  handleDelete,
  onIncrement,
  handleReset,
  handleAdd,
  onDecrement,
}) => {
  return (
    <>
      <button className="btn btn-primary m-2" onClick={handleReset}>
        Reset
      </button>
      <button className="btn btn-success m-2" onClick={handleAdd}>
        Add
      </button>
      {counter.map((count, index) => (
        <Counter
          key={index}
          value={count.value}
          id={count.id}
          onDelete={() => handleDelete(index)}
          onIncrement={() => onIncrement(index)}
          onDecrement={() => onDecrement(index)}
        />
      ))}
    </>
  );
};

export default Counters;
