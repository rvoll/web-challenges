import React from "react";
import "./styles.css";

// #2 worked at first but then didn't anymore - no idea why!
// I made sure everything was like in Elisabeth's code
// and then it worked; still haven't figured out what the problem was;
// Chatty didn't know either. He didn't admit it, though.
// for #3, I needed help peeping at Elisabeth's code:

console.clear();

export default function App() {
  function handleClick() {
    console.log("You really clicked me!");
  }

  return (
    <Button
      backgroundColor="yellow"
      textColor="red"
      text="Click me, Babe."
      onClick={handleClick}
    />
  );
}

//
function Button({ backgroundColor, textColor, isDisabled, text, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      style={{
        height: "100px",
        color: textColor,
        backgroundColor: backgroundColor,
      }}
    >
      {text}
    </button>
  );
}
