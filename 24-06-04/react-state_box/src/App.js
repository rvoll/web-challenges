import "./styles.css";
import { useState } from "react";

export default function App() {
  // let isActive = false;

  // Instead of let, consider the useState function.
  // Don't forget to import the function.
  // The initial state value should be false.
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(!isActive);
    // Check that the value changes correctly.
    console.log(isActive);
  }

  // für die Bonusaufgabe nur hier reinschreiben:
  // Ternary operator:
  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        {isActive ? "Deactivate" : "Activate"}
      </button>
    </main>
  );
}
