import { createServer } from "http";
import { client } from "./infra/database/client/client.js";
import { getProducts, createProduct } from "./controllers/productController.js";
import { productRoutes } from "./routes/products.js";
import "dotenv/config";
import { getTravels } from "./controllers/travelController.js";

const PORT = process.env.PORT || 3000;

const server = createServer((req, res) => {
  const baseRoteMatch = req.url === "/api/products"
  const urlMatcher = req.url.match(/\/api\/products\/([0-9]+)/)
  const method = req.method;
  const allowedMethods = ["GET", "PUT", "DELETE"];
  const travelsBaseRoute = req.url === "/api/travels";

  if (baseRoteMatch && method === "GET") {
    getProducts(req, res);

  } else if (travelsBaseRoute && method === "GET") {
    getTravels(req, res);

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
