import { useState } from "react";

const Greetings = ({ d1 }) => {
  const [data, setData] = useState();

  function handleInput(event) {
    const d = event.target.value;
    setData(d);
  }
  return (
    <form>
      <div>
        <label htmlFor="greeting">Hello: </label>
        <input id="greeting" onChange={handleInput} value={data} />
        <div>
          {d1} {data}
        </div>
      </div>
    </form>
  );
};

export default Greetings;
