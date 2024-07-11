import { createServer } from "node:http";
import Chance from "chance";

const chance = new Chance();

const age = chance.age();
const name = chance.name();
const profession = chance.profession();

console.log(name);
console.log(age);
console.log(profession);

// Whyis the code at the bottom not working?

export const server = createServer((request, response) => {
  // Question:
  // apparently the line below (the "status code") is very important;
  // but what does it do?
  response.statusCode = 200;
  response.end(
    `Ohy mate. The other day I met a person called ${name}. The person is ${age} years old.`
  );
});

// ========================
// const age = chance.age({ type: adult });
// // { type: adult }
// // chance.age({ type: "child" });

// // Generate a random person name
// // const name = chance.name();
// const first = chance.first({ nationality: "en" });

// const last = chance.last({ nationality: "nl" });

// const profession = chance.profession();
