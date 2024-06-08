import React from "react";
import "./styles.css";
import Box from "./components/Box";

export default function App() {
  function Boxes() {
    return (
      <>
        <Box color="#007bff" />
        <Box color="#fc3" />
        <Box color="#ff3333" />
      </>
    );
  }

  return (
    <main className="flex-container">
      <Boxes />
    </main>
  );
}

// Anm. (s. README):
// sometimes it is necessary to use fragments
// rather than a div tag;
// in this challenge for example, when using <div>
// instead of <> (=fragments)
// in the return statement of the Boxes component,
// the boxes are vertically aligned! 😱

// The reason is this: a flexbox refers only
// to its direct child elements;
// however, using a <div> element in Boxes
// creates a new layer so that the three Box
// elements are no longer flex items!
