import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>We are a bunch of nested articles</h1>
      <article>
        <h2>I´m number one - the biggest</h2>
        <h3>I´m the number one paragraph - the biggest.</h3>
        <p>
          I contain a few lines of meaningless text. Yes I do. Yes I do. Yes I
          do. Yes I do. Yes I do. Yes I do. Yes I do. Yes I do.{" "}
        </p>
        <h3>I´m number two</h3>
        <p>
          So do I. Yes I do. Yes I do. Yes I do. Yes I do. Yes I do. Yes I do.
          Yes I do. Yes I do.
        </p>
        <h3>And I´m number three</h3>
        <p>
          Mee, too. Yes I do. Yes I do. Yes I do. Yes I do. Yes I do. Yes I do.
          Yes I do. Yes I do.
        </p>
      </article>
      <article>
        <h2>I´m the number two nested article</h2>
        <p>
          I also contain a few lines of meaningless text. Yes I do. Yes I do.
          Yes I do. Yes I do. Yes I do. Yes I do. Yes I do. Yes I do.
        </p>
      </article>
      <article>
        <h3>And I´m number three</h3>
        <p>
          And so do I. Yes I do. Yes I do. Yes I do. Yes I do. Yes I do. Yes I
          do. Yes I do. Yes I do.
        </p>
      </article>
    </article>
  );
}
