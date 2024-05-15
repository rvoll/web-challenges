console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');
darkModeButton.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});

const lightModeButton = document.querySelector('[data-js="light-mode-button"]');
lightModeButton.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});

// DOESN't WORK!?!? - arguments of function in brackets problematic?
// LOOK AT THIS AGAIN WITH THE RELEVANT HANDOUT IN ORDER TO UNDERSTAND IT!
const toggleButton = document.querySelector('[data-js="toggle-button"]');

// Puh! Funktionert!
// Endlich.
// Ich hatte es auf Rat von ChatGPT zuerst mit 'function ...' probiert, statt mit 'addEventListener',
// und dann mit add event listener innerhalb bzw. nach der Funktion. So ein Quatsch. Natürlich
// 'add.EvenListener' und dann '"click" bewirkt (if x "a", else "b"').

toggleButton.addEventListener("click", () => {
  if (bodyElement.classList.contains("dark")) {
    bodyElement.classList.remove("dark");
  } else {
    bodyElement.classList.add("dark");
  }
  console.log("sanity check");
});
