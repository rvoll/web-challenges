import React from "react";
import "./styles.css";

// This code contains previous suboptimal versions
// and comments that help me understand the code.
// There is still one open question or rather
// one issue (see Anm.2) which I have not fully captured

// 1. latest improved version, with props defined in the App component and passed directly to the Sum component

export default function App() {
  function Sum(props) {
    return (
      <span>
        {props.a} + {props.b} = {props.a + props.b}
      </span>
    );
  }

  return (
    <div>
      <Sum a={3} b={5} />
    </div>
  );
}
// Anm.1:
// props are stated in the App component (within the return statement)
// which directly passes them to the Sum component.
// i.e., props are values that are "entered" (aka "passed"?!) inside the App component,
// actually inside the result of the function, namely the "return statement"
// The subordinate function (here Sum()) uses the placeholders props.a and props.b in order to replace the props
// and gets their value "passed down" (in the code it actually gets passed up because the sum function is defined "above" the return statement of the App function.) from the superordinate component, the App component)

// Anm.2:
// apparently the component <Sum /> must be a direct child
// of the return statement. Is this true?
// no; I think this is wrong.
// but probably I cannot use a or b as variables
// inside the Sum component because they are not defined as variables
// and I cannot use the props inside the App component's return statement either because they are props and cannot be passed around inside a component but only from one (a superordinate) component to another (subordinate component)
// ??? No. this is not logically sound:
// The issues discussed here came up when I tried to embedd
// the "output", i.e. the full calculation text "a + b =" in the App functions return statement
// rather than in the return statement of the Sum function.
// GPT says that either a and b must be introduced as variables, and
// in this case the full calculation text "a + b =" can stand
// in the App functions return statement,
// or the calculation text must stand in
// the return of the Sum function and get the values passed down
// as props from the return of the App function.

// 2. new improved version, with props and variables:

// export default function App() {
//   function Sum(props) {
//     return props.a + props.b;
//   }
//   const a = 2;
//   const b = 8;
//   return (
//     <div>
//       {a} + {b} = <Sum a={3} b={5} />
//     </div>
//   );
// }

// 3. first version: with variables instead of props:
// const valueA = 2;
// const valueB = 8;

// export default function App() {
//   function Sum() {
//     return valueA + valueB;
//   }
//   return (
//     <div>
//       {valueA} + {valueB} = {Sum(valueA, valueB)}{" "}
//     </div>
//   );
// }

// Inside of the return statement of your App component,
// replace the heading with your Sum component and
// pass it both props with values of your choice.
