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

//TASK: delete the value null and write code such that the variables have a value corresponding to their name.
// Use map to achieve this goal.
// "value" ist in diesem Fall sowas: ['as often as you like.', ...];
// ist also nicht unbedingt ein Zahlenwert.

// apply 'map'; from Andrea:
const lowerCaseAnswers = cards.map((card) => card.answer.toLowerCase());
console.log(lowerCaseAnswers);

//
//
//HIER WEITER!!!
// why 'cards.map' and not 'answers.map'?
// see above: because we are not meant to introduce a now variable (const) for  the answers.
// not working so far....
const questionsAndAnswersTogether = answers.map(
  (card) => card.answer() && card.question()
);
// null; // ["How often can I use <header>? - As often as you like.", ...]
console.log(lowerCaseAnswers);

// const lowerCaseAnswers = cards.map((card) => card.answer.toLowerCase());
// console.log(lowerCaseAnswers);
//
//
//

const questionAndAnswer = null; // [{ question: 'How often can I use <header>?', answer: 'As often as you like.'}, {...}]

export { lowerCaseAnswers, questionsAndAnswersTogether };
// , questionAndAnswer };

// In the ./index.js file, there is a cards array with three objects.

// Below this array, you will find a couple of variables (e.g. lowerCaseAnswers). They all are initialized with null.

// And now it's your turn: delete the value null and write code
//
// "such that the variables have a value corresponding to their name."
// WAS SOLL DAS DENN HEIßEN???
// Use map to achieve this goal.

// You will find some hints as comments.

// Switch to the ./index.js file and map / filtersome recipes!

// SPÄTER LÖSCHEN:

// // apply 'map'; my TRY:
// // I added this: I think it was not meant to be done like this
// const answers = [
//   "On Objects and Arrays",
//   "As often as you like.",
//   "On Objects and Arrays",
// ];
//
// const lowerCaseAnswers = answers.map((answer) => {
//   return answer.toLowerCase();
// }); // ['as often as you like.', ...]
// console.log(lowerCaseAnswers);
// //
// // getComputedStyle(answers);
// // I think the line above was given but it is not working.

// // Q: Is what I did correct? What was asked for?
// // Q: are the two ways correct? is any one preferrable?

// // Maybe this is what you want if you say we should apply "map"
// // but this is not what the text in the challenge says;
// // it sounds more like filter would fit here

// // // apply 'filter'
// // const lowerCaseAnswers = answers.filter((answer) => {
// //   return answer.lowerCase();
// //   // .lowerCase doesn't seem to work; how else can I write this?
// // }); // ['as often as you like.', ...]
// // console.log(lowerCaseAnswers);
// // getComputedStyle();
