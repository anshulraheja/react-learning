//learning to use 'useRef' hook in react
import { useRef, useState, useEffect } from "react";

export default function StopWatch() {
  var timerIdRef = useRef(0);
  const [count, setCount] = useState(0);

  const startHandler = () => {
    if (timerIdRef.current) {
      return;
    }
    timerIdRef.current = setInterval(() => setCount((c) => c + 1), 1000);
  };

  function stopHandler() {
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
  }
  function resetHandler() {
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
    setCount(0);
  }
  //cleanup to stop watch if components unmount with the watch active
  useEffect(() => {
    return () => clearInterval(timerIdRef.current);
  }, []);

  return (
    <div className="containerStyling">
      <div className="timerStyling">{count}</div>
      <div>
        <button onClick={startHandler} className="ButtonStyling startButton">
          Start
        </button>
        <button onClick={stopHandler} className="ButtonStyling stopButton">
          Stop
        </button>
        <button onClick={resetHandler} className="ButtonStyling resetButton">
          Reset
        </button>
      </div>
    </div>
  );
}
