import { useState, useEffect } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  // Questions:
  // why empty array above in useState
  // and why an empty array below, as argument of useEffect?

  console.log("pokemon: ", pokemon);

  // What does the function loadPokemon below do? Is it only for error handling? see HAndout JS error handling
  // "async function loadPokemon() {try {x} catch () {y}"}
  // it is used below in the useEffect function.
  async function loadPokemon() {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");

      const data = await response.json();

      setPokemon(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  // Einbau des useEffect Hook um Pokemon automatisch beim Seite laden zu ?fetchen,
  // mit leerem dependency array (Q: warum leer?)
  // useEffect Hook:
  // useEffect(() => {  }, [ ] )

  useEffect(() => {
    loadPokemon();
  }, []);

  return (
    <main>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
// Aufgabe:

//Change the code below so that
// the loadPokemon function is only executed
// when the app component is rendered initially`

// unter main rausgenommen:
// <button type="button" onClick={loadPokemon}>
//        Load Pokémon
//        </button>
