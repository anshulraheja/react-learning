import { useState } from "react";

function AddWithInput({ n1, initialN2 = 0 }) {
  const [n2, setN2] = useState(initialN2);
  function handleInputChange(event) {
    const input = event.target;
    const newN2 = Number(input.value);
    setN2(newN2);
  }
  return (
    <div>
      {n1} + <input type="number" value={n2} onChange={handleInputChange} /> ={" "}
      {n1 + n2}
    </div>
  );
}
export default AddWithInput;
