console.clear();

const operand1 = 12;
const operand2 = 4;

/*
Mathematical operations
*/
const addButton = document.querySelector('[data-js="add"]');
const subtractButton = document.querySelector('[data-js="subtract"]');
const multiplyButton = document.querySelector('[data-js="multiply"]');
const divideButton = document.querySelector('[data-js="divide"]');
const exponentButton = document.querySelector('[data-js="exponent"]');
const moduloButton = document.querySelector('[data-js="modulo"]');

addButton.addEventListener("click", () => {
  // 1. Add the two operands and store the result in a variable. Log the variable's value to the console.
  const sum = operand1 + operand2;
  console.log(sum);
});

subtractButton.addEventListener("click", () => {
  // 2. Subtract the two operands and store the result in a variable. Log the variable's value to the console.
  const difference = operand1 - operand2;
  console.log(difference);
});

multiplyButton.addEventListener("click", () => {
  // 3. Multiply the two operands and store the result in a variable. Log the variable's value to the console.
  const product = operand1 * operand2;
  console.log(product);
});

// 4. Divide the two operands and store the result in a variable. Log the variable's value to the console.
// UNCLEAR FORMULATION!!
divideButton.addEventListener("click", () => {
  const quotient = operand1 / operand2;
  console.log(quotient);
});

// ---ERROR IN INSTRUCTIONS!!!---ERROR IN INSTRUCTIONS!!!---ERROR IN INSTRUCTIONS!!!---ERROR IN INSTRUCTIONS!!!---
// ---ERROR IN INSTRUCTIONS!!!---ERROR IN INSTRUCTIONS!!!---ERROR IN INSTRUCTIONS!!!---ERROR IN INSTRUCTIONS!!!---
// ---ERROR IN INSTRUCTIONS!!!---ERROR IN INSTRUCTIONS!!!---ERROR IN INSTRUCTIONS!!!---ERROR IN INSTRUCTIONS!!!---
//
// 5. Raise "operand1" to the value of "operand2" and store the result in a variable. Log the variable's value to the console.
//   const addDifferenceInOrderToMakeEqual = operand1 + (operand2 - operand1);
// >>> watch yourself! This is not equivalent to "operand1 + (operand2 - operand1)", i.e. "Erhöhe x auf den Wert von y" but rather to op2 HOCH op?! right?
// Maybe it's a translation mistake in the instructions!!
//
// ---ERROR IN INSTRUCTIONS!!!---ERROR IN INSTRUCTIONS!!!---ERROR IN INSTRUCTIONS!!!---ERROR IN INSTRUCTIONS!!!---
// ---ERROR IN INSTRUCTIONS!!!---ERROR IN INSTRUCTIONS!!!---ERROR IN INSTRUCTIONS!!!---ERROR IN INSTRUCTIONS!!!---
// ---ERROR IN INSTRUCTIONS!!!---ERROR IN INSTRUCTIONS!!!---ERROR IN INSTRUCTIONS!!!---ERROR IN INSTRUCTIONS!!!---
//
// ---It should be "calculate operand2 to the power of operand1" (if the meaning "op2 hoch op1" is intended).---

exponentButton.addEventListener("click", () => {
  const exponent = operand2 ** operand1;
  console.log(exponent);
});

// 6. Calculate the remainder when dividing "operand1" by "operand2" and store the result in a variable.
// Log the variable's value to the console.
moduloButton.addEventListener("click", () => {
  const remainder = operand1 % operand2;
  console.log(remainder);
});

// ---HIER WEITER!!!---HIER WEITER!!!---HIER WEITER!!!---HIER WEITER!!!---HIER WEITER!!!---HIER WEITER!!!---HIER WEITER!!!---
// ---HIER WEITER!!!---HIER WEITER!!!---HIER WEITER!!!---HIER WEITER!!!---HIER WEITER!!!---HIER WEITER!!!---HIER WEITER!!!---
// ---HIER WEITER!!!---HIER WEITER!!!---HIER WEITER!!!---HIER WEITER!!!---HIER WEITER!!!---HIER WEITER!!!---HIER WEITER!!!---
// /*
// Update the first operand

// Please don't forget to think about the declaration of the variable "operand1".
//  ??? think OF ???
//
// ---okay, "declaration of the variable "operand1" with const"?
//
// */
// const increaseByOneButton = document.querySelector(
//   '[data-js="increase-by-one"]'
// );
// const increaseByFiveButton = document.querySelector(
//   '[data-js="increase-by-five"]'
// );
// const decreaseByOneButton = document.querySelector(
//   '[data-js="decrease-by-one"]'
// );
// const decreaseByFiveButton = document.querySelector(
//   '[data-js="decrease-by-five"]'
// );
// const multiplyByTwoButton = document.querySelector(
//   '[data-js="multiply-by-two"]'
// );
// const divideByTwoButton = document.querySelector('[data-js="divide-by-two"]');

// increaseByOneButton.addEventListener("click", () => {
//   // 7. Increase the value of "operand1" by 1. Log the new value to the console.
// });

// increaseByFiveButton.addEventListener("click", () => {
//   // 8. Increase the value of "operand1" by 5. Log the new value to the console.
// });

// decreaseByOneButton.addEventListener("click", () => {
//   // 7. Decrease the value of "operand1" by 1. Log the new value to the console.
// });

// decreaseByFiveButton.addEventListener("click", () => {
//   // 8. Decrease the value of "operand1" by 5. Log the new value to the console.
// });

// multiplyByTwoButton.addEventListener("click", () => {
//   // 11. Multiply the value of "operand1" by 2. Log the new value to the console.
// });

// divideByTwoButton.addEventListener("click", () => {
//   // 12. Divide the value of "operand1" by 2. Log the new value to the console.
// });
