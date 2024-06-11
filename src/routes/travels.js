import { getTravel } from "../controllers/travelController.js";

export const travelRoutes = {
    GET: (req, res, id) => getTravel(req, res, id)
}