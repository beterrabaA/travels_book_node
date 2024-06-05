import { createServer } from "http";
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
} from "./src/controllers/productController.js";
import { client } from "./src/infra/database/client/client.js";
import "dotenv/config";

const PORT = process.env.PORT || 3000;

const server = createServer((req, res) => {
  const urlMatcher = req.url.match(/\/api\/products\/([0-9]+)/)
  if (req.url === "/api/products" && req.method === "GET") {
    getProducts(req, res);
  } else if (urlMatcher && req.method === "GET") {
    const id = req.url.split("/")[3];
    getProduct(req, res, id);
  } else if (urlMatcher && req.method === "PUT") {
    const id = req.url.split("/")[3];
    updateProduct(req, res, id);
  } else if (urlMatcher && req.method === "PUT") {
    const id = req.url.split("/")[3];
    deleteProduct(req, res, id);
  } else if (req.url === "/api/products" && req.method === "POST") {
    createProduct(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "route not found" }));
  }
});

client
  .connect()
  .then(() => console.log("connected successfuly"))
  .catch((e) => console.log(e.message));

server.listen(PORT, () => console.log(`server running on port ${PORT}`));

client.on("notification", (msg) => console.log("notification", msg));
client.on("notice", (msg) => console.warn("notice:", msg));

server.on("connection", (socket) => console.log("someone connected!"));

// const urlMatch = req.url.match(/\/api\/products\/(\d+)/);
// const id = urlMatch[1];
// const handleRequest = (req, res) => {