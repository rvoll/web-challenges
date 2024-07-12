import { getProductById } from "services/productServices.js";

export default function handler(request, response) {
  const { id } = request.query;

  if (request.method === "GET") {
    const singleProduct = getProductById(id);
    response.status(200).json(singleProduct);
    return;
  } else {
    response.status(405).json({ message: "METHOD NOT ALLOWED" });
  }
}

// ===============
// NOTES:

// // Write a handler function
// export default function handler(request, response) {

//   // um die 'id' müssen geschweifte Klammern - warum??
//   const { id } = request.query;

//   // Warum so: ??
//   if (request.method === "GET") {
//     const singleProduct = getProductById(id);

// nicht so:
//   products.find((products) => product.id === id);

// response.status(200).json(singleProduct);
// // das muss hier auch noch rein, damit es nicht beide ausführt:
// return;

// ===============

// TASKS:

// To access the id from the url,

// destructure the id variable from request.query
// and pass id as argument to getProductById(id).

// Check your api route:

// switch to the browser and open /api/products/1:
// you should now see the product with id: 1.
