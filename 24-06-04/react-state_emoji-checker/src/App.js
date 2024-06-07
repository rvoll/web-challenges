import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  // declare a state variable: DONE
  const [code, setCode] = useState("");
  // ersetzt: let code = "?";
  //
  //probiert zu checken mit console.log:
  // console.log(code);
  // warum funktioniert der console.log nicht?
  const validCode = "🐡🐠🐋";

  // HIER WEITER!!!
  // HIER WEITER!!!
  // HIER WEITER!!!
  // Write a handleClick function that updates
  // the state variable according to
  // which emoji button was clicked.
  // Hint: event.target.textContent
  // (use code + event.target.textContent
  //   to append the new emoji)
  // HIER WEITER!!!

  // IST DAS HIER DER RICHTIGE ORT?
  // GLAUB JA. WIE IN DER DEMO 1.
  // NEIN!!! NOCHMAL NACHGUCKEN!!!
  //
  // HIER WEITER!!!
  // HIER WEITER!!!
  // HIER WEITER!!!
  //
  // function handleClick() {
  //   const nextCount = count + 1;

  //   // setCount(count + 1);
  //   setCount(nextCount);

  //   console.log('LOG--2: button click:', nextCount);
  // }
  function handleClick() {
    // 3 Zeilen aus der Demo 1:
    // const nextCount = count + 1;
    // // setCount(count + 1);
    // setCount(nextCount);
    // funktioniert nicht;
    // Fehlermeldung: "count and setCount not not defined!""
  }
  //

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            console.log("Update Code!");
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            console.log("Update Code!");
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            console.log("Update Code!");
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button
        type="button"
        onClick={() => {
          console.log("Reset Code!");
        }}
      >
        Reset
      </button>

      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}
