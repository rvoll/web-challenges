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
  // const currentTime = new Date().getHours();
  if (new Date().getHours() >= 6 && new Date().getHours() <= 12) {
    return "Good Morning";
  } else if (new Date().getHours() >= 13 && new Date().getHours() <= 18) {
    return "Good Afternoon";
  } else if (new Date().getHours() >= 19 && new Date().getHours() <= 22) {
    return "Good Evening";
  // wahrscheinlich überflüssig weil die Stunden bei 0 anfangen
  // } else if (new Date().getHours() >= 23 && new Date().getHours() <= 5) {
  //   return "Good Night";
  }
}

// mein Versuch:
//
// function getGreeting()
// {
// const currentTime = (getHours());
//  if currentTime <6
// {
// return "Good Night";
// }
//   else if currentTime <=12
//     {
//     return "Good Morning";}

//     else if {
//       currentTime <=18
//     {return "Good Afternoon";}
//     else if {
//       currentTime <=22
//     {
//     return "Good Evening";}
//     else if {
//       currentTime <=24
//     {
//     return "Good Night";}
//   }}}}

//     if (inputString.length > 3) {
//       return true;
//       console.log("I am never logged - true"); // this is never logged
//     } else {
//       return false;
//       console.log("I am never logged - false"); // this is never logged
//     }
//   }
// }

// noch nicht ganz fertig:
function getDayColor() {
    const currentDay = new Date().getDay();
    if (currentDay === 1)
    getDayColor(darkgrey);
  // hier ist Null noch dabei
    else if {(currentDay < 6)
    getDayColor(lightblue);   } 
  else {getDayColor(hotpink);    }
  }
  // Code here

  - Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"
  So = 0, Sa = 6

(HINT: you can get the current weekday: new Date().getDay() )
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
