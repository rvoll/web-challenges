import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  // let count = 0;
  function CountUp() {
    setCount(count + 1);
  }

  function CountDown() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            CountDown(), console.log("😺");
          }}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => {
            CountUp(), console.log("🐷");
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
