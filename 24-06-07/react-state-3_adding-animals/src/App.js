import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";
import { uid } from "uid";

// the data that is lifted up from the Form/index.js is:
// ??? (?animal.)name and (?animal.)emoji ???

const initialAnimals = [
  {
    id: "mTBErig",
    name: "Octopus",
    emoji: "🐙",
  },
  {
    id: "iMsbXQ1",
    name: "Crocodile",
    emoji: "🐊",
  },
  {
    id: "Qjf_K7V",
    name: "Beaver",
    emoji: "🦫",
  },
];

export default function App() {
  const [animals, setAnimals] = useState(initialAnimals);
  console.log("animals: ", animals);
  // for the line below compare onAddAnimal in index.js!
  // see also "?definition" below!
  function handleAddAnimal(newAnimal) {
    console.log("newAnimal:", newAnimal);
    // Replace the console.log with the state setter function;
    // pass it a copy of the previous state and
    // add the submitted animal at the end of this new state.
    // setAnimals([...animals, newAnimal]);
    //
    // When setAnimals is called, replace the newAnimal part
    // with a new object.
    setAnimals([
      ...animals,
      { id: uid(), ...newAnimal },
      // newObject
    ]);

    //     const [newObject, setNewObject] = useState(newAnimal);
    // setnewObject([...])

    // Spread newAnimal into this object and add the id key with id: uid().
    // It might look similar to this:
    // setXzys([...xyzs, {id: uid(), ...newXyz}]);
  }

  return (
    <main className="app">
      <Form onAddAnimal={handleAddAnimal} />
      <List animals={animals} />
    </main>
  );
}
