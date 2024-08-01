const recipes = [
  {
    title: "Crepes",
    duration: 60,
    ingredients: ["butter", "flour", "eggs", "milk", "salt"],
    servings: 3,
  },
  {
    title: "Scrambled Eggs",
    duration: 20,
    ingredients: ["eggs", "milk", "salt"],
    servings: 2,
  },
  {
    title: "Vegan Salmon",
    duration: 60 * 24 * 3, // 3 days
    ingredients: [
      "carrots",
      "olive oil",
      "nori sheets",
      "liquid smoke",
      "soy sauce",
    ],
    servings: 10,
  },
  {
    title: "Carrot Cake",
    duration: 120,
    ingredients: ["carrots", "flour", "eggs", "salt", "milk", "sugar"],
    servings: 10,
  },
];

/*
 1: `map` exercises
*/
// von Elisabeth:
// const onlyTitles = recipes.map((recipe) => recipe.title);
// console.log("First task: ", onlyTitles);
// // ['Crepes', ...]

const onlyTitles = recipes.map((recipe) => recipe.title);
console.log("Task 1: onlyTitles: ", onlyTitles);
null; // ['Crepes', ...]
// normalerweise kommt 'map' mit 'return'
// - apparently, this one cannot go with return because it is not a function;
// things other than functions are okay but do not take return.
// Understand this properly!


// Elisabeths:
// const titlesWithDuration = recipes.map(
//   (recipe) => `${recipe.title} (${recipe.duration}min)`
// );
// console.log("Second task: ", titlesWithDuration);
// // ['Crepes (60min)', ...]
// 
// HIER WEITER: 
const titlesWithDuration = recipes.map(
  (recipe) => 
// Wann nimmt man welche Klammern?
`${recipe.title}`
((recipes.filter((recipe) => (
  return recipe.duration == "0"())));
);
)
=> onlyTitles;

console.log("Task 2: titlesWithDurationNull: ", titlesWithDurationNull);


// return onlyTitles.duration == "0";}
// 
// ['Crepes (60min)', ...]

const timePerServing = null; // [20, 10, 432, 12]

// EXTRA:

// HINT: use first map() and then Array.prototype.join() with "method chaining" like so:
// myArray.map(...).join(', ');

const allTitlesInOneString = null; // 'Crepes, Scrambled Eggs, ...'

// For more information how to join an array,
// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join#joining_an_array_four_different_ways

/*
 2: `filter` exercises
*/

const recipesThatOnlyTake60minutesOrLess = null;

const allRecipesWithMoreThan2Servings = null;

const allRecipesWithTitlesLongerThan12Characters = null;

export {
  onlyTitles,
  titlesWithDuration,
  timePerServing,
  allTitlesInOneString,
  recipesThatOnlyTake60minutesOrLess,
  allRecipesWithMoreThan2Servings,
  allRecipesWithTitlesLongerThan12Characters,
};
