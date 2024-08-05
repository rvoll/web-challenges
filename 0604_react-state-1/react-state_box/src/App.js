import "./styles.css";
import { useState } from "react";

export default function App() {
  const [isActive, setIsActive] = useState(false);

  console.log("isActive value before clicking the button: ", isActive);

  function handleClick() {
    setIsActive(!isActive);
    // Check that the value changes correctly.
    console.log(
      "ORIGINAL CONSOLE LOG: isActive value in the handleClick function, i.e. after setting default: ",
      isActive
    );
  }
  console.log(
    "isActive value right after the handleClick function, i.e. after setting default: ",
    isActive
  );
  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        {isActive ? "Deactivate" : "Activate"}
      </button>
    </main>
  );
}
