/*

Important: Create a fork for each sub challenge!
// IGNORED THE ABOVE
Implement the following functionality:

1. On button click: The value of the first input field is copied into the second input field

2. On button click: The value of the first input field is copied in uppercase into the second input field

3. On button click: The values of the two input fields switch.

*/

const firstInput = document.querySelector("[data-js=first-input]");
const secondInput = document.querySelector("[data-js=second-input]");
const button = document.querySelector("[data-js=button]");

// // PART 1:
// button.addEventListener("click", () => {
//   secondInput.value = firstInput.value;
// });

// // PART 2:

// button.addEventListener("click", () => {
//   secondInput.value = firstInput.value.toUpperCase();
// });

// PART 3:

button.addEventListener("click", () => {
  const tempSecondInput = secondInput.value;
  secondInput.value = firstInput.value;
  firstInput.value = tempSecondInput;
});

// COPIED THIS:

// uppercaseButton.addEventListener("click", () => {
//   Input.value = firstInput.value.toUpperCase();
//   // secondInput.value = secondInput.value.toUpperCase();
// });

// lowercaseButton.addEventListener("click", () => {
//   firstInput.value = firstInput.value.toLowerCase();
//   // secondInput.value = secondInput.value.toLowerCase();
// });

// switchButton.addEventListener("click", () => {
//   const swap = firstInput.value;
//   firstInput.value = secondInput.value;
//   secondInput.value = swap;
// });
