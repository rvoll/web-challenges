import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?offset=0"
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, []);

  return (
    <main>
      <button type="button">Previous Page</button>
      <button type="button">Next Page</button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}

// Open the file `./src/components/PokemonList.js`.

// There is a button to show the next page,
// but it has no functionality yet.
// Try to find a way to load the next page.

// > _Hint 1:_ You need a way to store which page
// you are displaying right now and be able to
// update this value to the next page.

// > _Hint 2:_ Have a look at the URL parameter
// `?offset=` used for `fetch`.
// The API starts by giving you the first `20` Pokémon.
// In the end the URL needs to change.
// You can either keep track of the offset yourself,
// or use the value given and `next` in the API response.
