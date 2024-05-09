// // Store the cards in a global state

// // cards und alle anderen Daten im utils-Order in cards.js
// import { cards } from "./components/utils/cards.js";
// // das hier in Header.js

// import { Header } from "./components/Header/Header.js";

// // das hier in Form.js
// import { Form } from "./components/Form/Form.js";
// // import { handleFormSubmit(event) } from "./components/Form/Form.js";
// // bis hier

// // das hier in Bookmark.js
// import { Bookmark } from "./components/Bookmark/Bookmark.js";

// // das hier in Card.js
// import { Card } from "./components/Card/Card.js";

// // das hier in CardList.js
// import { CardList } from "./components/CardList/CardList.js";
//
//
//
// Oho!
// Ich hätte nicht bemerkt, dass die Funktionen hier überflüssig sind.
// Das habe ich erst bei Elisabeth gesehen.
// Das muss ich mir nochmal genau angucken, warum das so ist um es zu verstehen...

// das hier in App.js
import { App } from "./components/App/App.js";

// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}
// bis hier?
// Nö. Render bleibt hier.

render();
