import { createServer } from "http";
import { client } from "./infra/database/client/client.js";
import { getProducts, createProduct } from "./controllers/productController.js";
import { productRoutes } from "./routes/products.js";
import "dotenv/config";
import { getTravels } from "./controllers/travelController.js";
import { travelRoutes } from "./routes/travels.js";

const PORT = process.env.PORT || 3000;

const server = createServer((req, res) => {
  const baseRoteMatch = req.url === "/api/products"
  const productUrlMatcher = req.url.match(/\/api\/products\/([0-9]+)/)
  const travelUrlMatcher = req.url.match(/\/api\/travels\/([0-9]+)/)
  const method = req.method;
  const allowedMethods = ["GET", "PUT", "DELETE"];
  const travelsBaseRoute = req.url === "/api/travels";

  if (baseRoteMatch && method === "GET") {
    getProducts(req, res);

  } else if (travelsBaseRoute && method === "GET") {
    getTravels(req, res);

  } else if (productUrlMatcher && allowedMethods.includes(method)) {
    const productId = req.url.split("/")[3];
    const routeForProduct = productRoutes[method];

    routeForProduct(req, res, productId);

  } else if (travelUrlMatcher && allowedMethods.includes(method)) {
    const travelId = req.url.split("/")[3];
    const routeForTravel = travelRoutes[method]

    routeForTravel(req, res, travelId)
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
