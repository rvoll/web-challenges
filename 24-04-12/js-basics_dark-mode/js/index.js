//Lösung von Susan kopiert und versucht, zu verstehen
//Ist es üblich, eine js-Datei mit 'console.clear();' anzufangen?
console.clear();

//das brauche ich, weil es sich durch die Regel verändert
const bodyElement = document.querySelector('[data-js="body"]');

//die drei buttons werden als symbolische Konstanten definiert
const darkMode = document.querySelector('[data-js="dark-mode-button"]');
const lightMode = document.querySelector('[data-js="light-mode-button"]');
const toggleButton = document.querySelector('[data-js="toggle-button"]');
//const textButton = document.querySelector('[data-js="text-button"]');
//const noTextButton = document.querySelector('[data-js="notext-button"]');

//zentrale Funktion, die Events und die dazugehörigen Aktionen registriert
darkMode.addEventListener("click", () => {
  bodyElement.classList.add("dark");
  bodyElement.classList.remove("light");
});

lightMode.addEventListener("click", () => {
  bodyElement.classList.add("light");
  bodyElement.classList.remove("dark");
});

toggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});

//textButton.addEventListener("click", () => {
//  console.log("text");
//});

//noTextButton.addEventListener("click", () => {
//  console.clear();
//});
