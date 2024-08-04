import React from "react";
import "./styles.css";
import Box from "./components/Box";

export default function App() {
  return (
    <main className="flex-container">
      <Boxes />
    </main>
  );
}

function Boxes() {
  return (
    <>
      <Box color="#007bff" />
      <Box color="#fc3" />
      <Box color="#ff3333" />
    </>
  );
}

// Outsource the three Box components to a Boxes component.

// In the App.js file, create a Boxes component which
// returns the same three Box components as given above.
// For now, use a <div> component as a wrapper in the
// return statement of the Boxes component.

// In the App component, replace the three
// Box components with the Boxes component.
