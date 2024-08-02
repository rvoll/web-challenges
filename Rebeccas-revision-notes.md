# Rebeccas-revision-notes

## Revision progress

### DONE:

- completed 0529_react-basics (3 challenges)

### DO NEXT:

- read React Basics Handout and revise HTML: \
  https://developer.mozilla.org/en-US/docs/Web/HTML/Element \
  and JSX: \
  https://react.dev/learn/writing-markup-with-jsx

### LEFT TO DO:

- 0530 - 0722, i.e. more than 17 days&apos; challenges

## What I just did (in case it's wrong)

## React-specific stuff

- install the dependencies using `npm i` first (to work locally)

- run `npm run start` to start a development server and open the displayed URL in a browser.

- open application in your browser

## App/Page structure

### the [App.js] file

- the [App.js](./src/App.js) file contains a default export function called `App` (which returns a `<div>` here)

### Components

- we can outsource the heading/whatever is rendered in [App.js] (here) to its own component

- a component is a function that returns the wanted elements, e.g. a heading

- it may stand in the same file as the App function, although it usually gets its own component file with a transparent/semantic name in PascalCase (= Binnenmajuskel) inside a dedicated `components` folder
