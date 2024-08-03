import React from "react";
import "./styles.css";
import Box from "./components/Box";

export default function App() {
  // die Zeilen mit <main> sind von Elisabeth;
  // hatte ich so nicht auf Anhieb verstanden...
  return (
    <main className="flex-container">
      <Boxes />;
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

// Hm. Das habe ich alleine nicht so ganz hingekriegt.
// Vielleicht ein andermal nochmal versuchen!
