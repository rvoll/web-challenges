import { server } from "./server.js";
// server.listen(…

const port = 8000;

server.listen(port, () => {
  console.log("Connected to the port.");
});
