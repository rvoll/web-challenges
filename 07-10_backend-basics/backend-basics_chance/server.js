import { createServer } from "node:http";
import Chance from "chance";

const chance = new Chance();

const age = chance.age({ type: "senior" });
const name = chance.name({ nationality: "it" });
const profession = chance.profession();
const sentence = chance.sentence();

console.log(name);
console.log(age);
console.log(profession);

// Why does the code at the bottom not work?

export const server = createServer((request, response) => {
  response.statusCode = 200;
  response.end(
    `Ohy mate! Do you know anyone called ${name}, around ${age} years old, who used to work as a ${profession}?`
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
