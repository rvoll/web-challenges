import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 1, name: "🍌 banana", color: "yellow" },
    { id: 2, name: "🍒 cherry", color: "red" },
    { id: 3, name: "🍏 apple", color: "green" },
    { id: 4, name: "🍊 orange", color: "orange" },
    { id: 5, name: "🫐 blueberry", color: "blue" },
  ];

  return (
    <div className="app">
      {fruits.map(({ id, name, color }) => (
        <Card key={id} name={name} color={color} />
      ))}
    </div>
  );
}
