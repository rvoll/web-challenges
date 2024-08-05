import "./styles.css";
import { useState } from "react";

export default function App() {
  const [code, setCode] = useState("");
  const validCode = "🐡🐠🐋";

  function handleClick(emoji) {
    // if (code.length <= 3)
    setCode(code + emoji);
    // else if (code.length > 3) setCode("");
    console.log(emoji);
    console.log(code);
  }

  function handleReset() {
    setCode("");
  }

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            handleClick("🐡");
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐋");
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐠");
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>
      </div>

      <button
        type="button"
        onClick={() => {
          handleReset();
          console.log("Reset Code!");
        }}
      >
        Reset
      </button>

      {code === validCode && <p>Valid code! 🎉</p>}
    </div>
  );
}
