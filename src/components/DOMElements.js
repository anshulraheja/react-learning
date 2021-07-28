//learning useRef hook
import { useEffect, useRef, useState } from "react";

export default function DOMElements() {
  const [name, setName] = useState("");
  const inputRef = useRef();
  const prevName = useRef("");

  function focus() {
    inputRef.current.focus();
  }

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  //automatic focus on initial mount
  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);

  return (
    <>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={focus}>Focus</button>
      <div>Current name is: {name}</div>
      <div>Previous name was: {prevName.current}</div>
    </>
  );
}
