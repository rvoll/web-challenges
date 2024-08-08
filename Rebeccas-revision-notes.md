# Rebeccas-revision-notes

## Revision progress

### DO NEXT:

- do `0605_react-with-arrays` challenges, fruits DONE, `journal-app-entries-array` almost DONE, see above

> after that do `0604_react-state-2` and `state-3` challenges

> pay attention to order!

- If time allows:

  - read Handouts:

    - React Basics
    - React Props
    - React Nesting
    - React State 1
    - React State 2

  - revise HTML: \
    https://developer.mozilla.org/en-US/docs/Web/HTML/Element \
  - revise JSX: \
    https://react.dev/learn/writing-markup-with-jsx

### Unresolved Issues

- remaining question from `0605_react-with-arrays/react-with-arrays_journal-app-entries-array`:

(If you are using this template: How can you render a <Divider /> component between each entry?
Don't break the flexbox layout (a Fragment might help) - DONE)

> > > Avoid having a divider below the last or above the first entry

- I finally copied the code from Sabeth and still don't understand!

- `053/react-props_button`

  ...only made it peeping at Sabeth's code; still not sure what was actually the problem!!!

- `0605/react-with-arrays/react-with-arrays_fruits`

...only with help from Chatty;

**Difficulties:**

- understanding the general structure and knowing where exactly to use the array method .map() - _here in App.js_

- with Template Literals: How to use backticks and ${}

### Just DONE:

- completed 0604_react-state-1

- completed 0603_react-nesting (4 challenges - 3 tiny ones and a very big one)

- completed 0530_react-props (4 challenges); took me ages and I didn't really solve the forth challenge: `053/react-props_button`

### DONE:

- completed 0529_react-basics (3 challenges)

- installed all challenges 0530_react-props (4 challenges)

### LEFT TO DO:

- 0530 - 0722, i.e. more than 17 days&apos; challenges: 50 - 60

## What I just did (in case it's wrong)

## Fehler in den Challenges und Handouts

- **JS Inputs and Strings**

**string concatenation**
should be: **string concatenation**

- **react-state_emoji-checker**
  Each button click should **_"lock in"_** one emoji.

  should be: Each button click should **_"log in"_** one emoji.

- **Challenges: React State 1, Journal App Favorite Button**

  a button that allows you to **favorite** an entry.

  should be: a button that allows you to **mark an entry as favorite** an entry.

  (One could think one could say: "a button that allows you to **favor** an entry", but that would rather mean that the button would actually _allow_ you to like this entry more than the others.)

## General Stuff

when defining variables or in conditional rendering, \
 write

- logical 'equals' like this: `===`
- logical 'or': `||`
- logical AND: `&&`

### Basic math in Java Script

see: \
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math

## React-specific stuff

- install the dependencies using `npm i` first (to work locally)

- run `npm run start` to start a development server and open the displayed URL in a browser.

- open application in your browser

### JSX

[For writing components] React uses JSX, a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.

- see Handout React Basics:
  https://github.com/neuefische/hh-web-24-3/blob/main/sessions/react-basics/react-basics.md

We use JSX to write declarative code, i.e. we describe in JSX what element we want (e.g. a button element).

React’s **on-screen error messages help find where the problem is.** \
Give them a read if you get stuck!

#### The Rules of JSX

1. Return a single root element
2. Close all the tags
3. camelCase not all but most of the things!

compare https://react.dev/learn/writing-markup-with-jsx

## App/Page structure

### the [App.js] file (found in the `src` (=source) folder)

- the [App.js](./src/App.js) file contains a `default export function App()` (which returns a `<div>` here; it can also return one or more components like this <Component />)

### Components

React components are customizable, reusable building blocks for a React application, They serve as independent elements of the user interface that can be used multiple times across different parts of the app. They contain their own structure, logic, and potentially styling.

- we can outsource the heading/whatever is rendered in [App.js] (here) to its own component

- a component is a function that returns the wanted elements, e.g. a heading

- it may stand in the same file as the App function, although it usually gets its own component file with a transparent/semantic name in PascalCase (= Binnenmajuskel) inside a dedicated `components` folder

### Props

- Props is short for properties. They are a way to pass data to a child component. A component receives a props object as the first function parameter.

- Props are passed to a component as attributes.

- naming conventions for props:

  - Boolean props are often prefixed with is, has or should. For example isDisabled, hasError or shouldShow.
  - Props that take functions are often prefixed with on. For example onClick, onSubmit or onHover.

- Props are passed to a component as attributes:

`function UserCard(props) {
  return <div>{props.name}</div>;
}`

For convenience the props object is often destructured in the function parameter:

`function UserCard({ name }) {
  return <div>{name}</div>;
}`

- Props are passed to a component as attributes:

`<UserCard name="Alex" />`

You can pass any type of data as a prop.

`<UserCard
  name="Alex"
  age={25}
  onContact={() => console.log("let's chat!")}
  isFavorite={true}
  favoriteFoods={["Pasta", "Salad"]}
  contactDetails={{ email: "alex@neuefische.de", phone: "123456789" }}
/>`

String props can be passed using double quotes. All other props must be passed using curly braces.

💡 Notice the double curly braces for the object. This is because the outer curly braces are used to signify a JavaScript expression. The inner curly braces are used to define an object.

💡 There is a shorthand syntax for boolean props. If the value should be true you can omit the value.

`<UserCard isFavorite />`

Omitting any attribute will result in the value undefined for that prop.

#### Props and (Text) Styling (e.g. color)

- **color**:
  The color attribute on the button element does not affect the text color. Instead, you should use the style attribute to apply the color.

Here’s how you can do it:

`function Button({ color, disabled, text }) {
  return (
    <button style={{ color: color }} disabled={disabled}>
      {text}
    </button>
  );
}`

**Note:** use inline styling with the help of the style attribute: style={{height: "100px"}}

💡 **Additional hint:** If you want to set the background color via a prop, you need to use camelCase backgroundColor instead of kebab-case background-color.

- **border-radius**:
  Haven't managed yet to include border-radius in the props.

#### Conditional Rendering (with props)

- You can use props to conditionally render parts of a component.

`function UserCard({ name, isFavorite }) {
  return (
    <div>
      {name}
      {isFavorite ? <span>🌟</span> : null}
    </div>
  );
}`

💡 In JSX null is a way to render nothing.

You can not use an if statement within JSX because only expressions are allowed. \
_You can use an if statement outside of the JSX though:_

`function UserCard({ name, isFavorite }) {
  let favoriteStar = null;
  if (isFavorite) {
    favoriteStar = <span>🌟</span>;
  }`

`return (
    <div>
      {name}
      {favoriteStar}
    </div>
  );
}`

#### The `children` Prop

Oftentimes you'd want your own components to be nestable as well.

```js
<UserCard>
  <Avatar />
</UserCard>
```

If you nest a component inside of another component, the nested component is passed as a prop to the parent component. This special prop is called `children`.

```jsx
function UserCard({ children }) {
  return <div className="card">{children}</div>;
}
```

This component will render the nested element(s) as a child of the `div` element.

> 💡 The nested element(s) can be a single element, multiple elements, or even a string or number.

> 📙 Read more about [**Passing JSX as children**
> in the React Docs](https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children).

### Fragments

- a flexbox refers only to its direct child elements; however, using a `<div>` element in `Boxes` creates a new layer so that the three `Box` elements are no longer flex items!

  Use the developer tools of your browser to check this fact.

  To fix this, replace the `<div>` with fragments `<></>`: they won't create an HTML element and thus break the layout!

> 💡 Layout with flexbox is not the only reason for using fragments, but it's an easy-to-understand example. In general, fragments are a great way to avoid unnecessary `<div>` clutter.

## HTML

apostrophe / &#39;
apostrophe / &#39;
apostrophe / &#39;

| Symbol     | HTML |
| ---------- | ---- |
| apostrophe | &#39 |
| ...        | ..   |

## MAC Shortcuts

| Target        | Shortcut |
| ------------- | -------- |
| Emoji-palette | Fn-E     |

## State in React

In React we work with state by using the `useState` hook function.

We call the `useState` function and pass the **initial state** value as argument. This is the value
that is used in our app until something changes.

Calling the `useState` function gives us two things in return:

- a variable with the **current state** as value
- the `set` function to set a **new state**

```js
import { useState } from "react";

function SocialMediaPost() {
  const [liked, setLiked] = useState(false);

  function toggleLiked() {
    setLiked(!liked);
  }

  return (
    <article>
      <p>Liked: {liked ? "Yes" : "No"}</p>
      <button type="button" onClick={toggleLiked}>
        {liked ? "Remove like" : "Add like"}
      </button>
    </article>
  );
}
```

> 💡 There is a naming convention for React apps that the state variable and the function always
> follow the pattern of `x` and `setX`

In React state is encapsulated per instance of a component. A React component can have multiple states. You can use the `useState` function as much as you need.

You can store all kinds of data in state (like booleans, numbers, strings, objects or arrays).

```
import { useState } from "react";

function SocialMediaPost() {
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [views, setViews] = useState(0);

  /* ... */

  return <article>{/* ... */}</article>;
}
```

## String interpolation, Template literals, back tics: `` and '$'

- see Handout [**JS Inputs and Strings**](https://github.com/neuefische/hh-web-24-3/blob/main/sessions/js-inputs-and-strings/js-inputs-and-strings.md):

The third method to write strings
(namely `string`: back ticks or template literals.)
has the useful property that you can insert variables into the string by wrapping placeholders with a dollar sign and curly brackets ${} . This is also called string interpolation.

This way you don't have to concat multiple strings if you want to use a variable in your string:

> const stringConcatination = "Hello " + name + ", good to see you!";

> const withTemplateString = `Hello ${name}, good to see you!`;

## String concatenation

- see Handout [**JS Inputs and Strings**](https://github.com/neuefische/hh-web-24-3/blob/main/sessions/js-inputs-and-strings/js-inputs-and-strings.md):

Strings can be chained together by using the + operator (yes, the same as the maths operator). This is called string concatination:

const name = "Alex";
const stringConcatination = "Hello " + name + ", good to see you!";

### Embedding JavaScript

Inside a template literal, you can wrap JavaScript variables or expressions inside ${ }, and the result will be included in the string:

```
const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Chris"
```

You can use the same technique to join together two variables:

```
const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"
```

Joining strings together like this is called concatenation.

(https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings)
or - different from what we did: (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat)
