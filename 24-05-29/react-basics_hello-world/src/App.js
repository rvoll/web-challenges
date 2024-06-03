import React from "react";
import "./styles.css";

export default function App() {
  return HelloWorld();
}

function HelloWorld() {
  return <h1>Hello world!</h1>;
}

// Start you application and open it in your browser: the content of the <div> ("Say hello...") should be visible there as well.
//DONE
// Now, let us cherish a tradition and render "Hello world!".
//DONE
// Create Your First Custom Component
// Let's go a step further and outsource the heading to its own component.

// To do so, create a component (i.e. function) called HelloWorld.

// Use the following hints as guideline:

// In the App.js, create a new function called HelloWorld() (it does not matter whether you write it above or below the App function - but not inside it!).
// HelloWorld() should return the same HTML heading as in the first task above.
// In the return statement of the App function, replace the h1 with your HelloWorld component.
// Look at the browser and be amazed: nothing has changed, but you've built and used your first React component!
