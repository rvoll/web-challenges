// import { products } from "@/lib/products";
import dbConnect from "@/db/connect.js";
import Product from "@/db/models/Product.js";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  // in the right place, here?
  const product = await Product.findById(id).populate("reviews");

  // this line had been missing earlier:
  if (request.method === "GET") {
    // and here 'await' was missing:
    const product = await Product.findById(id);

    if (!product) {
      return response.status(404).json({ status: "Not Found" });
    }
    // else {
    response.status(200).json(product);
    // }
    // why are these lines above not correct here?
  } else {
    response.status(405).json({ mesage: "METHOD NOT ALLOWED" });
  }
}
