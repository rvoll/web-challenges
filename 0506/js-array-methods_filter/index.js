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
    tags: ["js", "next"],
  },
];

const onlyCardWithIdTwo = cards.filter((card) => {
  return card.id == "2";
});
console.log("Task 1, onlyCardWithIdTwo: ", onlyCardWithIdTwo);
// Shouldn't this be working? How can I test this?

const allCardsWith3Tags = cards.filter((card) => {
  return card.tags.length == 3;
});
console.log("Task 2, allCardsWith3Tags: ", allCardsWith3Tags);

const allCardsThatAreNotBookmarked = cards.filter((card) => {
  return card.isBookmarked == false;
});
console.log(
  "Task 3, allCardsThatAreNotBookmarked: ",
  allCardsThatAreNotBookmarked
);

const allCardsWithTagsHTMLOrJSThatAreBookmarked = cards.filter((card) => {
  return (
    (card.isBookmarked == true && card.tags.includes("html")) ||
    card.tags.includes("js")
  );
});
console.log(
  "Task 4, allCardsWithTagsHTMLOrJSThatAreBookmarked: ",
  allCardsWithTagsHTMLOrJSThatAreBookmarked
);

export {
  onlyCardWithIdTwo,
  allCardsWith3Tags,
  allCardsThatAreNotBookmarked,
  allCardsWithTagsHTMLOrJSThatAreBookmarked,
};
