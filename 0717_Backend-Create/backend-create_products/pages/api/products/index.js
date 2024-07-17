// refactor the app so that submitting the form
// creates a new entry in your MongoDB and
// refreshes the page to show all products
// (including the new one).

import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  // Q: Kann das hier stehen bleiben?
  if (request.method === "GET") {
    const products = await Product.find();
    return response.status(200).json(products);
  }

  // NEU: define POST API route
  if (request.method === "POST") {
    try {
      const productData = request.body;
      await Product.create(productData);
      response.status(201).json({ status: "Joke created." });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
}

// =============================================
// NOW: >>> Send a POST request <<<

// DONE:
// write the code for the request.method POST :

// Use a try...catch block.

// TASKS:

// Try to:
// Save the product data submitted by the form
// - accessible in request.body - to a variable called productData.

// use Product.create with the productData to
// create a new document in our collection.

// Wait until the new product was saved.

// Respond with a status 201 and the message
// { status: "Product created." }.

// If an error occurs:
// Log the error to the console.

// Respond with a status 400 and the message
// { error: error.message }.

// Submitting the form will not yet work because
// the form does not know that you've created a POST route it can use.
