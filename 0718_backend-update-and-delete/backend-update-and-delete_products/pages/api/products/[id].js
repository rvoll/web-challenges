// Add a PUT route
// Switch to pages/api/products/[id].js and write
// the code for the request.method PUT :

// Get the updated product from the request body:
// const updatedProduct = request.body;
// Wait for Product.findByIdAndUpdate(id, updatedProduct).
// Respond with a status 200 and the message
// { status: "Product successfully updated." }.

import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const product = await Product.findById(id).populate("reviews");

    if (!product) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(product);
  }

  // NEU:

  if (request.method === "PUT") {
    // NEU:
    const updatedProduct = request.body;

    // const product =
    await Product.findByIdAndUpdate(id, productData);

    return response.status(200).json({ status: `Joke ${id} is updated!` });
  }

  response.status(200).json(product);
}
