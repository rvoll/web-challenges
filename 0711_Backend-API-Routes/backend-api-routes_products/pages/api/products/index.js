import { getAllProducts } from "/services/productServices.js";
import { getProductById } from "services/productServices.js";

// LIT für nachher (Tip von Laura): HO React data fetching "loading an error state"

export default function handler(request, response) {
  const products = getAllProducts();

  console.log(products);

  response.status(200).json(products);

  if (request.method === "GET") {
    response.status(200).json(products);
  } else {
    response.status(405).json({ message: "METHOD NOT ALLOWED" });
  }
}

//  Comments:

//   so funktioniert die exp.def.function:
//   response.status(200).json(products);

//   aber besser ist es so:
//   if (request.method === "GET") {
//     response.status(200).json(products);
//   } else {
//     response.status(405).json({ message: "METHOD NOT ALLOWED" });
//   }

// wenn fertig, von da aus fetchen und weitermachen.

// zuerst geben wir der response "getAllProducts" als Wert mit:
// response.status(200).json(getAllProducts);

// um es übersichtlicher zu machen definieren wir stattdessen
// hierdrüber products als "getAllProducts":

// const products = getAllProducts();

// und geben der response die "products" mit:

// response.status(200).json(products);

//  Jess: die Dateien sind isoliert von einander; wir können hier nochmal products definieren
