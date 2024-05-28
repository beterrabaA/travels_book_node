import products from "../data/products.json" assert { type: "json" };
import { v4 as uuid4 } from "uuid";
import { writeDataFromFile } from "../utils/index.js";

export function findAllProducts() {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}

export function findProductById(id) {
  return new Promise((resolve, reject) => {
    const product = products.find((p) => p.id === id);
    resolve(product);
  });
}

export function create(data) {
  return new Promise((resolve, reject) => {
    const newProduct = { id: uuid4(), ...data };
    products.push(newProduct)
    writeDataFromFile(products)
    resolve(product);
  });
}
