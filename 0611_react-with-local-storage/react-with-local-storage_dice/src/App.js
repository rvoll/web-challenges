import { D6Button } from "./components/D6Button";
import History from "./components/History";
import "./styles.css";

// Tips beim Recap mitgeschrieben.
// bei jedem Würfeln reichern wir das array um ein neues Objekt an.
// die vergangenen Ergebnisse werden angezeigt und der Würfel bleibt liegen ()
// Bem. Jessica:

// Sylvie: habe den Button hochgezogen in App.js

// (?Hauptcontent aus Button Komponente raus und hierrein verschoben)

// you want to show recent dice rolls in a list and store them in local storage.

export default function App() {
  // hier rein:

  // const [rolls, setRolls]

  // const handleRoll

  // const currentRollValue

  return (
    <div className="app">
      <main className="app__main">
        <D6Button
        // value onRoll
        />
      </main>
      <aside className="app__aside">
        <History rolls={[]} />
      </aside>
    </div>
  );
}
