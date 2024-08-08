import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 1, name: "🍌 banana", color: "yellow" },
    { id: 2, name: "🍒 cherry", color: "red" },
    { id: 3, name: "🍏 apple", color: "green" },
    { id: 4, name: "🍊 orange", color: "orange" },
    { id: 5, name: "🫐 blueberry", color: "blue" },
  ];

  // inspired by Sabeth, slightly modified:
  return (
    <div className="app">
      {fruits.map((fruit) => {
        return (
          <div key={fruit.id}>
            <Card name={fruit.name} color={fruit.color} />
          </div>
        );
      })}
    </div>
  );
}

// im Vergleich: Sabeths Lösung

// return (
//   <ul className="app">
//     {fruits.map((fruit) => {
//       return (
//         <li key={fruit.id}>
//           <Card name={fruit.name} color={fruit.color} />
//         </li>
//       );
//     })}
//   </ul>
// );

// im Vergleich: mein ursprüngliche Lösung

// return (
// <div className="app">
//   {fruits.map(({ id, name, color }) => (
//     <Card key={id} name={name} color={color} />
//   ))}
// </div>
