console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next", "advanced"],
  },
];

const answers = [
  "On Objects and Arrays",
  "As often as you like.",
  "On Objects and Arrays",
];

// CHALLENGE UNCLEAR - WHAT IS ASKED FOR?

//TASK: delete the value null and write code such that the variables have a value corresponding to their name. Use map to achieve this goal.

// // apply 'map'; from Andrea:
// const lowerCaseAnswers = cards.map((card) => card.answer.toLowerCase());
// console.log(lowerCaseAnswers);

// apply 'map'; my TRY:
const lowerCaseAnswers = answers.map((answer) => {
  return answer.toLowerCase();
}); // ['as often as you like.', ...]
console.log(lowerCaseAnswers);
//
// getComputedStyle(answers);

// Q: Is what I did correct? What was asked for?
// Q: are the two ways correct? is any one preferrable?

// Maybe this is what you want if you say we should apply "map"
// but this is not what the text in the challenge says;
// it sounds more like filter would fit here

// // apply 'filter'
// const lowerCaseAnswers = answers.filter((answer) => {
//   return answer.lowerCase();
//   // .lowerCase doesn't seem to work; how else can I write this?
// }); // ['as often as you like.', ...]
// console.log(lowerCaseAnswers);
// getComputedStyle();

//HIER WEITER!!!
//
const questionsAndAnswersTogether = null; // ["How often can I use <header>? - As often as you like.", ...]

const questionAndAnswer = null; // [{ question: 'How often can I use <header>?', answer: 'As often as you like.'}, {...}]

export { lowerCaseAnswers, questionsAndAnswersTogether, questionAndAnswer };

// In the ./index.js file, there is a cards array with three objects.

// Below this array, you will find a couple of variables (e.g. lowerCaseAnswers). They all are initialized with null.

// And now it's your turn: delete the value null and write code
//
// "such that the variables have a value corresponding to their name."
// WAS SOLL DAS DENN HEIßEN???
// Use map to achieve this goal.

// You will find some hints as comments.

// Switch to the ./index.js file and map / filtersome recipes!
