import "./styles.css";
// neu, von mir:
import Header from "./components/Header";
import Image from "./components/Image";
import Navigation from "./components/Navigation";
import Link from "./components/Link";
import Logo from "./components/Logo";
import Avatar from "./components/Avatar";

//
import avatar from "./img/avatar.jpg";
import logo from "./img/logo.jpg";

// PROBLEM:
// ran into a problem creating Link, Logo and Avatar;
// don't know what the problem is;
// will take time to do this later and rather
// do the State challenges now.
// This is a pain to ask chat GPT because of the various
// component folders...
export default function App() {
  return (
    <body>
      <Header>
        <Link href="#">
          <Image src={logo} alt="logo" />
        </Link>
        <Navigation>
          <Link className="navigation__link" href="#home">
            Home
          </Link>
          <Link className="navigation__link" href="#about">
            About
          </Link>
          <Link className="navigation__link" href="#impressum">
            Impressum
          </Link>
        </Navigation>
        <Avatar></Avatar>
      </Header>
      <main>content goes here…</main>
    </body>
  );
}
// replaced by Avatar:
//
//<button
//type="button"
//onClick={() => console.log("I could toggle a profile!")}
//aria-label="toggle profile"
//>
//<Image className="round-image" src={avatar} alt="avatar" />
//</button> */}

// Anm.1: Strange. The wrapper <Navigation> draws a box
// around the nav bar which nav did not do.
// Why is this so?

// I guess this is not so important.
