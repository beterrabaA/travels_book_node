import { createServer } from "http";
import { client } from "./src/infra/database/client/client.js";
import { getProducts, createProduct } from "./src/controllers/productController.js";
import { productRoutes } from "./src/routes/products.js";
import "dotenv/config";

const PORT = process.env.PORT || 3000;

const server = createServer((req, res) => {
  const baseRoteMatch = req.url === "/api/products"
  const urlMatcher = req.url.match(/\/api\/products\/([0-9]+)/)
  const method = req.method;
  const allowedMethods = ["GET", "PUT", "DELETE"];

  if (baseRoteMatch && method === "GET") {
    getProducts(req, res);

  } else if (urlMatcher && allowedMethods.includes(method)) {
    const id = req.url.split("/")[3];
    const route = productRoutes[method];

    route(req, res, id);

  } else if (baseRoteMatch && method === "POST") {
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