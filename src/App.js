import "./styles.css";
import AddWithInput from "./components/AddWithInput";
import Greetings from "./components/Greetings";
import IncrementDecrement from "./components/IncrementDecrement";
import FetchData from "./components/FetchData";
import WindowWidth from "./components/WindowWidth";
export default function App() {
  return (
    <div className="App">
      {/* <AddWithInput n1={2} n2 /> */}
      {/* <Greetings d1="hello" /> */}
      {/* <IncrementDecrement /> */}
      {/* <FetchData /> */}
      <WindowWidth />
    </div>
  );
}