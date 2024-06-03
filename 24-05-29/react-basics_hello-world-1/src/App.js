import React from "react";
import "./styles.css";

export default function App() {
  return HelloWorld();
}

function HelloWorld() {
  return <h1>Hello world!</h1>;
}

// Aufg.1
// Render by Modifying the App component
// Render a heading with the text "Hello world!" to the browser.
// To do so, change the div into an h1 and change its text accordingly.
// Look in the browser and be proud: you have successfully entered the React World!
// DONE
//
// Aufg.2
// Create Your First Custom Component
// Let's outsource the heading to its own component.

// To do so, create a component (i.e. function) called HelloWorld.
// In the App.js, create a new function called HelloWorld() (it does not matter
// whether you write it above or below the App function - but not inside it!).
// HelloWorld() should return the same HTML heading as in the first task above.
// In the return statement of the App function, replace the h1 with your HelloWorld component.
// DONE
