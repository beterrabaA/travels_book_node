import { createServer } from "http";
import {
  getProducts,
  getProduct,
  createProduct,
} from "./src/controllers/productController.js";
import { client } from "./src/infra/database/client/client.js";
import "dotenv/config";

const PORT = process.env.PORT || 3000;

const server = createServer((req, res) => {
  if (req.url === "/api/products" && req.method === "GET") {
    getProducts(req, res);
  } else if (
    req.url.match(/\/api\/products\/([0-9]+)/) &&
    req.method === "GET"
  ) {
    const id = req.url.split("/")[3];
    getProduct(req, res, id);
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

client.on("notification", (msg) => console.log("notification",msg));
client.on("notice", (msg) => console.warn("notice:", msg));

server.on("connection", (socket) => console.log("someone connected!"));
