import react, { useState } from "react";

function IncrementDecrement() {
  const [count, setCount] = useState(() => 0);

  function handleIncrement() {
    setCount((previousCount) => previousCount + 1);
  }

  function handleDecrement() {
    setCount((previousCount) => previousCount - 1);
  }

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default IncrementDecrement;
