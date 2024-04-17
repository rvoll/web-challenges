console.clear();

// Part 1: Password - DONE
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

// der log - zur Kopntrolle wird nicht ausgeworfen
//console.log("Access denied!");

// funktioniert nicht. Warum? vorläufug weiter zu Aufgabe 2
if (SUPER_SECRET_PASSWORD === receivedPassword) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd - DONE
const number = 6;

if (number % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// Part 3: Hotdogs - DONE
const numberOfHotdogs = 42;

if (numberOfHotdogs < 5) {
  console.log("2 euro per hotdog");
} else if (numberOfHotdogs < 100) {
  console.log("1.50 euro per hotdog");
} else if (numberOfHotdogs < 1000000) {
  console.log("1 euro per hotdog");
} else {
  console.log("0.10 euro per hotdog");
}

// Part 4: Daytime - DONE
// - use a ternary operator to define the `statement` variable as follows:
// - if the currentHour is smaller than 17, `statement` should read "Still need to learn..."
// - if the currentHour is greater or equal to 17 it should equal "Partytime!!!"

const currentHour = 12;

const statement = currentHour < 17 ? "Still need to study..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting - DONE, copied from Elisabeth
const userName = "Archibald";

const greeting = "Hello " + (userName === "Andrea" ? "Coach!" : userName) + "!";

console.log(greeting);
