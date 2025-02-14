import React, { useState } from "react";
import Row from "./components/Row";

function App() {
  const [input, setInput] = useState([
    {
      id: 1,
      value: 0,
    },
    {
      id: 2,
      value: 0,
    },
    {
      id: 3,
      value: 1,
    },
  ]);

  function handleIncrement(itemIndex) {
    const newF = input.map((i, ind) =>
      ind === itemIndex ? { ...i, value: i.value + 1 } : i
    );
    setInput(newF);
  }

  function handleD(itemIndex) {
    const newF = input.map((i, ind) =>
      ind === itemIndex
        ? { ...i, value: i.value > 0 ? i.value - 1 : i.value }
        : i
    );
    setInput(newF);
  }

  function handleAdd() {
    const newInputEl = [...input, { id: input.length + 1, value: 0 }];
    setInput(newInputEl);
  }

  function handleReset() {
    const newInputEl = input.map((i) => ({ ...i, value: 0 }));
    setInput(newInputEl);
  }
  function handleDelete(itemIndex) {
    const newInputEl = input.filter((i, ind) => ind !== itemIndex);
    setInput(newInputEl);
  }

  return (
    <>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleAdd}>ADD</button>
      {input.map((item, index) => (
        <Row
          key={index}
          handleD={() => handleD(index)}
          handleIncrement={() => handleIncrement(index)}
          input={item.value}
          handleDelete={() => handleDelete(index)}
        />
      ))}
    </>
  );
}

export default App;
