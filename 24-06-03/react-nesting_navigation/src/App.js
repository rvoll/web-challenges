import "./styles.css";
// neu, von mir:
import Header from "./components/Header";
import Image from "./components/Image";
//
import avatar from "./img/avatar.jpg";
import logo from "./img/logo.jpg";

export default function App() {
  return (
    <>
      <Header>
        {/* das image ist raus: */}
        <a href="#">
          <Image src={logo} alt="logo" />
        </a>
        <nav>
          <a className="navigation__link" href="#home">
            Home
          </a>
          <a className="navigation__link" href="#about">
            About
          </a>
          <a className="navigation__link" href="#impressum">
            Impressum
          </a>
        </nav>
        {/* das hierüber muss raus: */}
        <button
          type="button"
          onClick={() => console.log("I could toggle a profile!")}
          aria-label="toggle profile"
        >
          <img className="round-image" src={avatar} alt="avatar" />
        </button>
      </Header>
      <main>content goes here…</main>
    </>
  );
}

// ### 1. Header component

// Task: Outsource the `<header>` into ya `Header` component.

//   - Export a `Header` component which returns the same
//   `<header></header>` element as in the `App.js` file.//
// How???
//
// - Don't forget the `className` attribute.
//   - The function should receive a `children` prop
//   and render it between the opening and closing `<header>` tags.
// - In the `App.js` file, import the `Header` component
// and replace the `<header></header>` tags with it.
