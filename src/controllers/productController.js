import {
  findAllProducts,
  findProductById,
  create,
} from "../models/products.js";

// @desc gets all products
export async function getProducts(request, response) {
  try {
    const products = await findAllProducts();
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(products));
  } catch (error) {}
}

export async function getProduct(request, response, id) {
  try {
    const product = await findProductById(id);
    if (!product) {
      response.writeHead(404, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ message: "product not found" }));
    } else {
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify(product));
    }
  } catch (error) {}
}

export async function createProduct(request, response) {
  try {
    const product = {
      title: "Game of thrones",
      description: "A book which tell a story",
      price: 9.99,
    };

    const newProduct = await create(product);
    response.writeHead(201, { "Content-Type": "application/json" });
    response.end(JSON.stringify(newProduct));
  } catch (error) {}
}
