import React from "react";
import "./styles.css";

export default function App() {
  function Smiley({ isHappy }) {
    return <div>{isHappy ? "🙂" : "😢"}</div>;
  }

  return (
    <div>
      <Smiley isHappy={true} />
    </div>
  );
}
// Problems in my original code before chat GPT:

// Problem 1:
// I had written this wrong, as "Smiley(props)";
// Where do I find the instructions on how to do this?
// In the props Handout, I guess?

// Problem 2:
// the return statement within it is misplaced.
// Also, there is an extra return statement in the App function
