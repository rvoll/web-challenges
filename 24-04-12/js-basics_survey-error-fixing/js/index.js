console.clear();

// ------------------ 1 & 2 -----------------

// 1. This code selects the "next" button using an ID. This is bad practice. Can you find a better solution?
// Ich habe jetzt das hier aus dem Vorturnfile abgeschrieben bzw. ihm nachempfunden; nicht sicher ob das Sinn macht:
const nextButton = document.querySelector('[data-js="next-button"]');
//replaced:("#next");
//and Susan reminded me to replace above "main" with "next-button" which I did.
nextButton.addEventListener("click", () => {
  console.log("Go to next question");
});
//DONE

// 2. When clicking the "previous" button, this event listener is not executed. Do you know what's wrong with this code?
const prevButton = document.querySelector('[data-js="prev-button"]');
prevButton.addEventListener(
  "click",
  // I replaced "prev" by "click" above
  () => {
    console.log("Go to previous question");
  }
);
//DONE

// ------------------ 3 & 4 -----------------

const firstChoiceButton = document.querySelector('[data-js="choice-button-1"]');
const secondChoiceButton = document.querySelector(
  '[data-js="choice-button-2"]'
);

// 3. This event listener is connected properly. When clicked the button is shown active. However, the debug message doesn't appear in the debug console. Where is the error with this code?
firstChoiceButton.addEventListener("click", () => {
  firstChoiceButton.classList.add("active-choice");
  secondChoiceButton.classList.remove("active-choice");
  console.log("Selected first choice");
  //replaced: console("Selected first choice");
  // the console log(?) was not entered correctly
});
//DONE

// 4. When clicking on the second choice, the button should be shown with an active state. Do you see why it isn't working?
secondChoiceButton.addEventListener("click", () => {
  firstChoiceButton.classList.remove("active-choice");
  secondChoiceButton.classList.add("active-choice");
  // I replaced 'remove' in the original
  //  secondChoiceButton.classList.remove("active-choice");
  // by 'add' in order to activate the button
  console.log("Selected second choice");
});
//DONE
//ALL DONE!!!
