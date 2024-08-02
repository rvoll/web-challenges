import React from "react";
import "./styles.css";

export default function App() {
  return Article();
}
function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Title of my article</h2>
      <label htmlFor="UserInput">{"Your input goes in here:"}</label>
      <input id="UserInput" type="text" />

      <a
        className="article__link"
        href="https://developer.mozilla.org/en-US/docs/Glossary/Tag"
      >
        Click me!
      </a>
    </article>
  );
}
// the attribute id goes on the <input> and the attribute htmlFor
// goes on the <label> matching the input attribute id, connecting
// the <label> tag with the <input> tag

//<a>: The Anchor element creates a hyperlink to web pages, files,
//    email addresses, locations in the same page,
//    or anything else a URL can address
