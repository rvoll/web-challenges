import { createServer } from "node:http";

export const server = createServer((request, response) => {
  response.end(
    "Hi Rebecca! How is summer treating you? It certainly seems you're enjoying it!"
  );
});
