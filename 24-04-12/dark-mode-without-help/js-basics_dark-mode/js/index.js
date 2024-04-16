console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

//die drei buttons werden als symbolische Konstanten definiert
//"- query all 3 buttons with the 'data-js' attribute"

const darkMode = document.querySelector('[data-js="dark-mode-button"]');
const lightMode = document.querySelector('[data-js="light-mode-button"]');
const toggleButton = document.querySelector('[data-js="toggle-button"]');

//"- add an event listener to each button:"
//"  - "switch to dark mode" button always adds the class "dark" to the body"
darkMode.addEventListener("click", () => {
  bodyElement.classList.add("dark");
  //bodyElement.classList.remove("light");
});

//" - "switch to light mode" button always removes the class "dark" from the body"
lightMode.addEventListener("click", () => {
  bodyElement.classList.remove("dark");

  //"Switch to the index.js file and find some light where there seems to be only darkness!"
  bodyElement.classList.add("light");
});

//"  - "toggle mode" button toggles the class "dark" on the body"
toggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
