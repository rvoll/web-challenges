import Chance from "chance";

export default function handler(request, response) {
  if (request.method === "GET") {
    const chanceInstance = new Chance();

    const character = {
      firstName: chanceInstance.first(),
      lastName: chanceInstance.last(),
      age: chanceInstance.age(),
      profession: chanceInstance.profession(),
    };
    // console.log("character: ", character);

    response.status(200).json(character);
    return;
  } else {
    response.status(405).json({ message: "METHOD NOT ALLOWED" });
  }
}

// -------------

// import { getAllProducts } from "/services/productServices.js";

// export default function handler(request, response) {
//   if (request.method === "GET") {
//     const products = getAllProducts();
//     console.log("products: ", products);
//     response.status(200).json(products);
//     return;
//   } else {
//     response.status(405).json({ message: "METHOD NOT ALLOWED" });
//   }
// }

// --------------
// TASKS:

// write a handler function which >>> see HO backend-api-routes, Next.js API routes!

// export default function handler(request, response) {
//   response.status(200).json({ message: "Hello neuefische!" });
// }

// responds with a 200 status code and

// with a character object containing random information (see example below);

// parses the character object with the .json() method.

//   In Next.js, an API route is simply a JavaScript module that exports
//   a default function. For example, a file called pages/api/hello.js
//   creates the API endpoint /api/hello that responds with a JSON message of
//   "Hello neuefische!". The handler function takes two arguments:
//   a request object and a response object, which are used to start
//   the serverless programm on vercel and handle incoming requests
//   and send responses back to the client.
