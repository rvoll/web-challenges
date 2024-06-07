import React from "react";
import "./styles.css";
// import useState
import { useState } from "react";

export default function App() {
  // replace let;
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            // change the function of the button
            {
              setCount(count - 1);
            }
            // console.log("🤔");
          }}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => {
            // change the function of the button (entw. direkt hier oder extra function)
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
