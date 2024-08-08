import ColoredNumber from "./ColoredNumber";
import { useState } from "react";

// Refactor the `./src/components/Counter.js` component so that it updates the displayed number when clicking a button.

// You can use the following hints as guideline:

// - Looks like the `Counter` needs a state; can you think of an appropriate initial value?
// - You need to pass the current count to the `ColoredNumber` component as the `value` prop.
// NOT SURE I DID THIS AS EXPECTED.

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleSubtraction() {
    setCount(count - 1);
  }

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber
        count={count}
        onIncrement={handleIncrement}
        onSubtract={handleSubtraction}
        value={count}
      />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={handleIncrement}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={handleSubtraction}
        >
          -
        </button>
      </div>
    </div>
  );
}
