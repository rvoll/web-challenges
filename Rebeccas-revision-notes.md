# Rebeccas-revision-notes

## Revision progress

### DO NEXT:

- solve challenges 0530_react-props

- if time permits:
  - read React Basics Handout
  - revise HTML: \
    https://developer.mozilla.org/en-US/docs/Web/HTML/Element \
  - revise JSX: \
    https://react.dev/learn/writing-markup-with-jsx

### DONE:

- completed 0529_react-basics (3 challenges)

- installed all challenges 0530_react-props (4 challenges)

### LEFT TO DO:

- 0530 - 0722, i.e. more than 17 days&apos; challenges: 50 - 60

## What I just did (in case it's wrong)

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
