import { deleteProduct, getProduct, updateProduct } from "../controllers/productController.js";

export const productRoutes = {
    GET: (req, res, id) => getProduct(req, res, id),
    PUT: (req, res, id) => updateProduct(req, res, id),
    DELETE: (req, res, id) => deleteProduct(req, res, id),
}