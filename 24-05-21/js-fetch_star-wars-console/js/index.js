console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  // Log the fetched data to the console
  // console.log(data);
  //
  // log the entire data object
  //   console.log(data.results);
  //
  // log different values of the data object
  //   console.log(data.results[0].name);

  // Bonus: Can you log the eye color of R2-D2?
  //   console.log(data.results[2].eye_color);

  //
  // Aufgabe für mich selber zum ausprobieren und Verstehen:
  // try to log out the names of all elements with "forEach"
  // mit Elisabeths Hilfe - nochmal selber durchdenken:
  //
  // results.forEach(() => {
  console.log(data);

  const characters = data.results;
  //   results ist ein key in data
  //   data ist eine Objekt; count, results, etc. sind keys; results hat als value ein array;
  //   characters ist ein array
  characters.forEach((character) => {
    console.log(character.eye_color);
  });

  // })
}

fetchData();
