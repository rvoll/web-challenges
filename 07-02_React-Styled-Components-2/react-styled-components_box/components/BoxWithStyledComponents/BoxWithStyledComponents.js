import styled from "styled-components";

// export default function BoxWithStyledComponents({ props }) {
export default function BoxWithStyledComponents({ isBlack }) {
  return <StyledBox $isBlack={isBlack} />;
}
// return <StyledBox ($isBlack ==== {isBlack} ?   background-color: "black" :   background-color: green;
// ;)
// />;

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ $isBlack }) => ($isBlack ? "black" : "green")};
  margin: 2rem;

  &:hover {
    background-color: yellow;
  }
`;

// ===============================================
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// what the dollar sign means in JavaScript, commonly known as the "dollar sign operator,"
// and how it is used in JavaScript programming:

// Using the $ in Template Literals:

// Template literals are enclosed in backticks (`)
// instead of single or double quotes.
// They allow you to embed expressions
// directly within the string using placeholders,
// denoted by ${expression}.
// The dollar sign followed by curly braces ${}
// is used to evaluate and embed expressions
// dynamically in template literals.

// const name = 'John Doe';
// const age = 20;

// Using template literals for string interpolation
// console.log(`My name is ${name} and I'm ${age} years old.`);
// In this example, the expressions ${name} and ${age} are evaluated and replaced with their corresponding values in the resulting string. This allows for easy and readable string concatenation with variables.

// https://www.freecodecamp.org/news/what-does-the-dollar-sign-mean-in-javascript/

// ===============================================
// TASKS:

// The 'BoxWithStyledComponents.js' should
// export a function which
// accepts a prop $isBlack (note the $ sign)
// returns a div
// - - - - - - - - - - - - - - - -
// Inside of the same file,
// create a styled component called StyledBox
// which styles a div.

// Inside of the return statement of your function,
// replace the div with StyledBox.
// Pass the $isBlack prop to the StyledBox component.
// StyledBox should have the same styling as the BoxWithClassName component.
// Check whether the $isBlack prop is true
// and set the correct background-color accordingly.

// How could you set the styling for the hover effect again?
