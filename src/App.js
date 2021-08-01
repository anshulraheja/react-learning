import "./styles.css";
import React from "react";
import AddWithInput from "./components/AddWithInput";
import Greetings from "./components/Greetings";
import IncrementDecrement from "./components/IncrementDecrement";
import FetchData from "./components/FetchData";
import WindowWidth from "./components/WindowWidth";
import ChangeTheme from "./components/ChangeTheme";
import { ThemeProvider } from "./components/ChangeThemeContext";
import StopWatch from "./components/StopWatch";
import DOMElements from "./components/DOMElements";
import UseEffectSkipFirstRender from "./components/useEffectSkipFirstRender";
import QuizBee from "./components/QuizBee";
import TodoList from "./components/TodoList";
export default function App() {
  return (
    <div className="App">
      {/* <AddWithInput n1={2} n2 /> */}
      {/* <Greetings d1="hello" /> */}
      {/* <IncrementDecrement /> */}
      {/* <FetchData /> */}
      {/* <WindowWidth /> */}
      {/* <ThemeProvider>
        <ChangeTheme />
      </ThemeProvider> */}
      {/* <StopWatch /> */}
      {/* <DOMElements /> */}
      {/* <UseEffectSkipFirstRender /> */}
      {/* <QuizBee /> */}
      <TodoList />
    </div>
  );
}
