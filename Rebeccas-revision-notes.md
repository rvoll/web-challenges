# Rebeccas-revision-notes

## What I just did (in case it's wrong)

- in the `package.json` in `react-basics_hello-world-1` I modified the following line:

`"scripts": {
    "start": "node start.js"
    // "start": "react-scripts start"
  },`

because npm run start would render an error message. ChatGPT's idea.

=> didn't work; undid it

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
