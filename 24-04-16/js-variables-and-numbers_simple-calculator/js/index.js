console.clear();

let operand1 = 12;
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
  const twoOperandsAdded = operand1 + operand2;
  console.log(twoOperandsAdded);
  // 1. Add the two operands and store the result in a variable. Log the variable's value to the console.
});

subtractButton.addEventListener("click", () => {
  const twoOperandsSubtracted = operand1 - operand2;
  console.log(twoOperandsSubtracted);
  // 2. Subtract the two operands and store the result in a variable. Log the variable's value to the console.
});

multiplyButton.addEventListener("click", () => {
  // 3. Multiply the two operands and store the result in a variable. Log the variable's value to the console.
  const twoOperandsMultiplied = operand1 * operand2;
  console.log(twoOperandsMultiplied);
});

divideButton.addEventListener("click", () => {
  // 4. Divide the two operands and store the result in a variable. Log the variable's value to the console.
  const twoOperandsDivided = operand1 / operand2;
  console.log(twoOperandsDivided);
});

exponentButton.addEventListener("click", () => {
  // 5. Raise "operand1" to the value of "operand2" and store the result in a variable. Log the variable's value to the console.
  const twoOperandsExponent = operand1 ** operand2;
  console.log(twoOperandsExponent);
});

moduloButton.addEventListener("click", () => {
  // 6. Calculate the remainder when dividing "operand1" by "operand2" and store the result in a variable. Log the variable's value to the console.
  const twoOperandsRemainder = operand1 % operand2;
  console.log(twoOperandsRemainder);
});

/*
Update the first operand

Please don't forget to think about the declaration of the variable "operand1".
*/
const increaseByOneButton = document.querySelector(
  '[data-js="increase-by-one"]'
);
const increaseByFiveButton = document.querySelector(
  '[data-js="increase-by-five"]'
);
const decreaseByOneButton = document.querySelector(
  '[data-js="decrease-by-one"]'
);
const decreaseByFiveButton = document.querySelector(
  '[data-js="decrease-by-five"]'
);
const multiplyByTwoButton = document.querySelector(
  '[data-js="multiply-by-two"]'
);
const divideByTwoButton = document.querySelector('[data-js="divide-by-two"]');

increaseByOneButton.addEventListener("click", () => {
  // 7. Increase the value of "operand1" by 1. Log the new value to the console.
  operand1++;
  console.log(operand1);
});

increaseByFiveButton.addEventListener("click", () => {
  // 8. Increase the value of "operand1" by 5. Log the new value to the console.
  operand1 += 5;
  console.log(operand1);
});

decreaseByOneButton.addEventListener("click", () => {
  // 7. Decrease the value of "operand1" by 1. Log the new value to the console.
  operand1 -= 1;
  console.log(operand1);
});

decreaseByFiveButton.addEventListener("click", () => {
  // 8. Decrease the value of "operand1" by 5. Log the new value to the console.
  operand1 -= 5;
  console.log(operand1);
});

multiplyByTwoButton.addEventListener("click", () => {
  console.log(operand1 * 2);
  // 11. Multiply the value of "operand1" by 2. Log the new value to the console.
});

divideByTwoButton.addEventListener("click", () => {
  console.log(operand1 / 2);

  // 12. Divide the value of "operand1" by 2. Log the new value to the console.
});
