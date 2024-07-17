import dbConnect from "@/db/connect";
import Product from "@/components/Product";

export default async function handler(request, response) {
  await dbConnect();

  //  If the request.method is GET,
  if (request.method === "GET") {
    //  above correct???

    // use the Product model to find all products and
    // return them as a response.
    const products = await Product.find();

    return response.status(200).json(products);
  } else {
    return response.status(405).json({ message: "METHOD NOT ALLOWED" });
  }
}
