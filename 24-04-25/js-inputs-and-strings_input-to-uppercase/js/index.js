console.clear();

/*
Convert the input value to uppercase when clicking the button

[ ] – Assign the input element to a variable
[ ] – Assign the button element to a variable
[ ] – Add an event listener to the button, so the input value turns into uppercase when the button is clicked

Hint: Access the value by using `.value` on the input element

*/

// mein erster Versuch:
// console.log("a test string".toUpperCase());

// const button-uppercase = querySelector('[data-js="button"]');
// button.addEventListener("click, () => {help-text.toUpperCase()} );

// von Rahaf:
const inputElement = document.querySelector('[data-js="first-input"]');
const buttonElement = document.querySelector('[data-js="button-uppercase"]');
/*function turnToUppercase() {
  const inputValue = inputElement.value;
  const upperCase = inputValue.toUpperCase();
  inputElement.value = upperCase;
}
buttonElement.addEventListener("click", turnToUppercase);*/
buttonElement.addEventListener("click", () => {
  const inputValue = inputElement.value;
  const upperCase = inputValue.toUpperCase();
  inputElement.value = upperCase;
});
// buttonElement.addEventListener("click");
