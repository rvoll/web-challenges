import React from "react";
import "./styles.css";

export default function App() {
  return Article();
}

function Article() {
  <article className="article">
    <h2 className="article__title">Title of my article</h2>
    <label id="label" htmlFor="label">
      {"Label"}
    </label>
    <input id="input" htmlFor="input">
      {"input"}
    </input>
    {/* not sure about the lines below: */}
    <a
      className="article__link"
      href="https://developer.mozilla.org/en-US/docs/Glossary/Tag"
    >
      text content
      {/* ="text content article link" */}
    </a>
  </article>;
}
// an <h2> with the class article__title and a text of your choice
// a <label> and <input> tag connected with id and htmlFor (!) attributes
// an <a> tag with the class article__link as well as text content and href attribute of your choice (What about a Wikipedia article?)
//
// Task
// Write an Article component and use it to replace the given <div>.

// Your component should contain the following parts:

// an <article> as a wrapper HTML element with the class article
// an <h2> with the class article__title and a text of your choice
// a <label> and <input> tag connected with id and htmlFor (!) attributes
// an <a> tag with the class article__link as well as text content and href attribute
// of your choice (What about a Wikipedia article?)
