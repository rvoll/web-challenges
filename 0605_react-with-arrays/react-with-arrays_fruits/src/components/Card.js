import "./Card.css";

export default function Card({ name, color }) {
  return <p className={`card card--${color}`}>{name}</p>;
}

// I had gotten this line wrong:
// className={`card card--${color}`}

// ============
// Chatty's INSTRUCTION:

// Template Literal: Use backticks and ${}
// to insert the color variable into the class name
// correctly: `card card--${color}`.

// ============
// Chatty's EXPLANATION:

// Base Class (card):

// The card class provides the base styling for all cards, such as padding, border-radius, margin, text alignment, and any other shared styles.

// Modifier Class (card--${color}):

// The card--${color} class provides specific styling based on the color. This is where the background color is applied.

// By using both classes, you separate concerns:

// card handles general card styling.

// card--${color} handles the color-specific styling.
