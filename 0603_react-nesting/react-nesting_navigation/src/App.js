import "./styles.css";
import Header from "./components/Header.js";
import Navigation from "./components/Navigation.js";
import NavLink from "./components/NavLink.js";
import Logo from "./components/Logo.js";
import Avatar from "./components/Avatar.js";

export default function App() {
  return (
    <>
      <Header>
        <Logo />
        <Navigation>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#impressum">Impressum</NavLink>
        </Navigation>
        <Avatar />
      </Header>
      <main>content goes here…</main>
    </>
  );
}
