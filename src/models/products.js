import { query } from "../infra/database/client/client.js";

export function findAllProducts() {
  return new Promise((resolve, reject) => {
    const queryText = 'SELECT * FROM books;'
    const productsDb = query(queryText)
    resolve(productsDb);
    reject([])
  });
}

export function findProductById(id) {
  return new Promise((resolve, reject) => {
    const queryText = 'SELECT * FROM books WHERE id = $1'
    const product = query(queryText,[id])
    resolve(product);
  });
}

export function create(data) {
  return new Promise((resolve, reject) => {
    const { title, description, price } = data
    const queryText = 'INSERT INTO books(name, description, price) VALUES ($1, $2, $3);'
    const queryValues = [title, description, price]
    const newProduct = query(queryText, queryValues)
    resolve(newProduct);
  });
}

export function update(id) {
  return new Promise((resolve, reject) => {
    const queryText = 'SELECT * FROM books WHERE id = $1'
    const product = query(queryText,[id])
    resolve(product);
  });
}
