console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

// BOTH DONE WITH HELP FORM OTHERS
*/

const display = document.querySelector('[data-js="display"]');

// function getGreeting() {
// Code here
// - Write a function getGreeting that returns a different greeting depending on the current time:
// - 6 - 12: returns "Good Morning"
// - 13 - 18: returns "Good Afternoon"
// - 19 - 22: returns "Good Evening"
// - 23 - 5: returns "Good Night"

// von Susan:
function getGreeting() {
  const currentTime = new Date().getHours();
  if (typeof currentTime !== "number") {
    return "NaN";
  } else if (currentTime >= 6 && currentTime <= 12) {
    return "Good Morning";
  } else if (currentTime >= 13 && currentTime <= 18) {
    return "Good Afternoon";
  } else if (currentTime >= 19 && currentTime <= 22) {
    return "Good Evening";
    // wahrscheinlich überflüssig weil die Stunden bei 0 anfangen
    // } else {return "Good Night";
  }
}

// von Elisabeth:
function getDayColor() {
  // This is a strange format
  // which I don't fully understand; it looks like a function:
  // new Date().getDay();
  const currentDay = new Date().getDay();
  if (typeof currentDay !== "number") {
    return "NaN";
  }

  if (currentDay === 1) {
    return "darkgrey";
  } else if (currentDay >= 2 && currentDay <= 5) {
    return "lightblue";
  } else {
    return "hotpink";
  }
}

// I had thought it was necessary to carry out the function,
// but I guess by using return, the function gets "carried out"
//   So = 0, Sa = 6
//
// (HINT: you can get the current weekday: new Date().getDay() )
// }

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
