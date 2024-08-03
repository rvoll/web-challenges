# Rebeccas-revision-notes

## Revision progress

### Unresolved Issues

- `053/react-props_button`

  ...only made it peeping at Sabeth's code; still not sure what was actually the problem!!!

### DO NEXT:

- solve challenges 0603_react-nesting

- if time permits:

  - read Handouts:

    - React Basics
    - React Props
    - React Nesting

  - revise HTML: \
    https://developer.mozilla.org/en-US/docs/Web/HTML/Element \
  - revise JSX: \
    https://react.dev/learn/writing-markup-with-jsx

### Just DONE:

- completed 0530_react-props (4 challenges); took me ages and I didn't really solve the forth challenge: `053/react-props_button`

### DONE:

- completed 0529_react-basics (3 challenges)

- installed all challenges 0530_react-props (4 challenges)

### LEFT TO DO:

- 0530 - 0722, i.e. more than 17 days&apos; challenges: 50 - 60

## What I just did (in case it's wrong)

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

### Conditional Rendering (with props)

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
