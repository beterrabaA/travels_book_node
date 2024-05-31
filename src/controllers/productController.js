import {
  findAllProducts,
  findProductById,
  create,
  update,
} from "../models/products.js";
import { getRequestData, sendResponse } from "../utils/index.js";

// @desc gets all products
export async function getProducts(request, response) {
  try {
    const result = await findAllProducts();
    sendResponse(response, 200, result.rows);
  } catch (error) {
    sendResponse(response, 400, { message: error.message });
  }
}

export async function getProduct(request, response, id) {
  try {
    const product = await findProductById(id);
    if (!product.rows[0]) {
      sendResponse(response, 404, { message: "product not found" })
    } else {
      sendResponse(response, 200, product.rows[0]);
    }
  } catch (error) {
    sendResponse(response, 400, { message: error.message });
  }
}

export async function createProduct(request, response) {
  try {
    const body = await getRequestData(request);
    const { name, description, price } = JSON.parse(body);

    const product = { name, description, price };

    await create(product);
    sendResponse(response, 201, { message: "Product created" });
  } catch (error) {
    sendResponse(response, 400, { message: error.message });
  }
}

export async function updateProduct(request, response, id) {
  try {
    const body = await getRequestData(request);
    const { name, description, price } = JSON.parse(body);

    const product = { name, description, price };

    await update(id, product)
    sendResponse(response, 202, { message: "Product updated" })
  } catch (error) {
    sendResponse(response, 400, { message: error.message });
  }
}
