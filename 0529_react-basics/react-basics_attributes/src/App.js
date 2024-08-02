import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article_title">
        Learning JSX, &quot;a syntax extension for JavaScript that lets you
        write HTML-like markup inside a JavaScript file&quot; (
        <a
          className="title_link"
          href="https://react.dev/learn/writing-markup-with-jsx"
        >
          https://react.dev/learn/writing-markup-with-jsx
        </a>
        )
      </h2>

      <label id="input" htmlFor="input">
        fill in whatever you want:
      </label>
      <input id="input" htmlFor="input"></input>
      <a
        className="article_link"
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element"
      >
        mdn&apos;s list of HTML elements
      </a>
      <a
        className="article_link"
        href="https://react.dev/learn/writing-markup-with-jsx"
      >
        React&apos;s explanation of JSX
      </a>
    </article>
  );
}
