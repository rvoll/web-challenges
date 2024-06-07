import "./styles.css";

const name = "Buddy";

// - Inside of the return statement of your `App` component,
// replace the heading with your `Greeting` component and
// pass it a `name` prop with a value of your choice.

export default function App() {
  console.log("name: ", { name });

  return <Greeting name={name} />;
  // the line above is what I got wrong;
  // it passes the 'name' prop to the Greeting component!
  // I had just written 'return Greeting();'

  // Why does it not say anywhere in the handout,
  // what the (return statement in the) export function should look like?
  // as in '<Function key={prop}/>'?
  // should I know this from an earlier Handout?
}

// - Write the `Greeting` component inside of the `src/App.js`.

// - It accepts a prop called `name` (make sure to destructure it).
function Greeting({ name }) {
  return (
    <div>
      <h1>Hello {name}!</h1>
    </div>
  );
  // - It returns an HTML element and uses the `name` prop to render "Hello, [name]!";
}
