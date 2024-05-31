import {
  findAllProducts,
  findProductById,
  create,
} from "../models/products.js";
import { getRequestData, sendResponse } from "../utils/index.js";

// @desc gets all products
export async function getProducts(request, response) {
  try {
    const result = await findAllProducts();
    sendResponse(response, 200, result.rows);
  } catch (error) {
    console.log(error);
  }
}

export async function getProduct(request, response, id) {
  try {
    const product = await findProductById(id);
    if (!product.rows[0]) {
      response.writeHead(404, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ message: "product not found" }));
    } else {
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify(product.rows[0]));
    }
  } catch (error) {}
}

export async function createProduct(request, response) {
  try {
    const body = await getRequestData(request);
    const { title, description, price } = JSON.parse(body);

    const product = { title, description, price };

    await create(product);
    response.writeHead(201, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ message: "product created!" }));
  } catch (error) {
    console.log(error);
  }
}
