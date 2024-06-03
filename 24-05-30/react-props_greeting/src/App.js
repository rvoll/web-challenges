import "./styles.css";

// export default function App() {
//   return <h1>Replace me with your component!</h1>;
// }

// von Susan (von mir modifiziert):
export default function App() {
  return (
    <div>
      <Greeting name="Rebecca" isCoach={false} />
    </div>
  );
}

function Greeting({ name, isCoach }) {
  return (
    <h1>
      {isCoach ? "Hey Coach, nice to see you!" : `Hi ${name}, nice to see you!`}
    </h1>
  );
}
//
// Wenn ich die Aufgabenstellung richtig verstanden habe sollte man jetzt noch
// der app beibringen, Coaches am Namen zu erkennen?!
// Rahaf: const coaches (als array) = [Andrea, ...] und dann return(?) mit array method, z.B. includes.name und dann den Tern. Operator...
// o.ä.
//
// Aufgabe: custom greeting component;
// function Greeting() {
// return <div>
//   {PaymentResponse.name}
// </div>;
// };
//
// and now destructured: - mein Versuch (der Anfang) - den kommentiere ich jetzt aus:
// function Greeting({ name, isCoach }) {
//   return <div>Hi {name}! Nice to see you.</div>;
// }

// the App component returns a default heading element.
// Replace this element with a custom Greeting component,

// which renders a greeting according to its props.

// You can use the following hints as guideline:

// Write the Greeting component inside of the src/App.js.
// DONE
// It accepts a prop called name (make sure to destructure it).
//
// It returns an HTML element and uses the name prop to render "Hello, [name]!";
// Inside of the return statement of your App component, replace the heading with your Greeting component and pass it a name prop with a value of your choice.

// von Susan:
//
// import "./styles.css";

// export default function App() {
//   return (
//     <div>
//       <Greeting name="Susan" isCoach={false} />
//     </div>
//   );
// }

// function Greeting({ name, isCoach }) {
//   return <h1>{isCouch ? "Hello, Coach" : `Hello, ${name}!`}</h1>;
// }
