import { useState } from "react";
import "./App.css";
import { getColor } from "./color-service";

export function App() {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("blue");

  const handleIncrease = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
    setColor("blue");
  };

  const handleDecrease = () => {
    const newCounter = counter - 1;
    setCounter(newCounter);
    setColor("red");
  };

  const handleReset = () => {
    setCounter(0);
    setColor("red");
  };

  return (
    <div>
      <h1>Ada School - React Hooks</h1>

      <div>
        <span className={color}>Counter:{counter}</span>
      </div>

      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
