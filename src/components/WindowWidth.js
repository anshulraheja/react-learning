//side effect is running even on providing empty array as dependencies
import { useState, useEffect } from "react";

function WindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleResize() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return window.removeEventListener("resize", handleResize);
  });
  return <div>{width}</div>;
}

export default WindowWidth;
