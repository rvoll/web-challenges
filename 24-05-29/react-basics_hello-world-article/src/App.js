import React from "react";
import "./styles.css";

export default function App() {
  return HelloWorldArticle();
}

//
// Render an HTML article tag containing a heading
// and a paragraph to the browser. To do so,
// create a component called HelloWorldArticle.
//
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

// Use the following hints as guideline:

// In the App.js, create a new function called HelloWorldArticle().
// HelloWorldArticle() should return an HTML article tag as a wrapper which contains;
// an h1 heading
// at least one p tag
// Note: Add whatever tags you like, but the predefined styles are limited ;)
// In the return statement of your App function, replace the div with your HelloWorldArticle component.

// hierunter vorgegebene Lösung von jd. anders'/oder meine alte?
// Egal. Ich mach das jetzt nochmal!
//
// 1.
// function HelloWorldArticle() {
//   return (
//     <wrapper>
//       <h1>This is the title</h1>
//       <p>This is the first paragraph.</p>
//       <p>This is the second paragraph.</p>
//       <p>This is the third paragraph.</p>
//     </wrapper>
//   );
// }
