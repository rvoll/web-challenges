import React from "react";
import "./styles.css";
// import react function useState:
import { useState } from "react";

export default function App() {
  // declare a state variable:
  const [code, setCode] = useState("");
  // [] stands for an empty string; would "" be fine, too?
  console.log("code 1: ", code);
  const validCode = "🐡🐠🐋";

  // Write a handleClick function that updates
  // the state variable according to
  // which emoji button was clicked.

  // corrected - I did not have event in here
  // and had thus also wrongly changed it in the setCode function
  function handleClick(event) {
    // update state variable according to which button was clicked
    // Hint: event.target.textContent
    // (use code + event.target.textContent
    //   to append the new emoji)
    setCode(code + event.target.textContent);
    console.log("code 2: ", code);
  }
  // I had approached it this way round
  // (because I did not read the instructions properly!!!):
  // if aria-label="Pufferfish" > {code} + "🐡",
  // if aria-label="Whale" > {code} + "🐋",
  // if aria-label="Clownfish" > {code} + "🐠"}

  // von Elisabeth (not part of the instructions;
  // is used to make the reset button work):
  function handleReset() {
    setCode("");
  }

  // in order to give the buttons the functions above,
  // replace onClick with 'onClick={handleClick}'
  // and 'onClick={handleReset}', respectively
  //  in the return statement
  return (
    <div className="container">
      <div className="button-container">
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}
