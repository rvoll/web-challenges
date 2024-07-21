import { createServer } from "node:http";

export const server = createServer((request, response) => {
  if (request.url === "/api/fish/1") {
    response.statusCode = 200;
    response.end("Shrimp");
  } else if (request.url === "/api/fish/2") {
    response.statusCode = 200;
    response.end("Anemone fish");
  } else {
    response.statusCode = 404;
    response.end("not found");
  }
});

// NOCHMAL ANGUCKEN UND DURCHDENKEN!
// >>> problems fixed:

// "node: http";

// replace 'response.end = "Shrimp"' with 'response.end("Shrimp")'
// and equivalents

// replace first 'else' with 'else if'
