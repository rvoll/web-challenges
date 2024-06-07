import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 2,
      name: "🍏 apple",
      color: "green",
    },
    {
      id: 3,
      name: "🍓 strawberry",
      color: "red",
    },
    {
      id: 4,
      name: "🐝 plum",
      color: "blue",
    },
  ];

  // Phillip: "wahrscheinlich Punkte vor den Karten weil li Element - aber das brauch ja ein parent ul?!; besser mit div (wie vorgegeben) - das brauch kein parent; oder noch besser mit article" (aber das brauch dann eins - wahrscheinlich hier besser div)
  // SPÄTER ÄNDERN!!!
  return (
    <main className="app">
      <ul className="app__fruits">
        {/* change to list-style="none" in CSS? */}
        {fruits.map((fruit) => {
          return (
            <li key={fruit.id}>
              <Card
                // fehlt das hier? um die Karten anzuzeigen?
                // className={card}
                id={fruit.id}
                name={fruit.name}
                color={fruit.color}
              />
            </li>
          );
        })}
      </ul>
    </main>
  );
}

// BONUS - später!
// Change the Card component so that it
// receives a color prop and set the
// background-color of the Card to this value.
// Use the color property of each fruit object for this prop.

// Hint: check the ./src/components/Card.css file
// for some cues as to how to handle having the colors
// change automatically
