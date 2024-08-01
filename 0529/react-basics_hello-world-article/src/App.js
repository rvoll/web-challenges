import React from "react";
import "./styles.css";

export default function App() {
  return HelloWorldArticle();
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>This is my heading.</h1>
      <p>And this is paragraph 1.</p>
      <p>And this is paragraph 2.</p>
      <p>And this is paragraph 3.</p>
    </article>
  );
}
