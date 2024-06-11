import { findAllTravels } from "../models/travels.js";
import { getTravelByIdService } from "../services/travelService.js";
import { sendResponse } from "../utils/index.js";

export async function getTravels(request, response) {
    try {
        const result = await findAllTravels();
        sendResponse(response, 200, result.rows);
    } catch (error) {
        sendResponse(response, 400, { message: error.message });
    }
}

export async function getTravel(request, response, id) {
    try {
        const expanded = true
        const optimized = true
        const travel = await getTravelByIdService(id, expanded, optimized)
        sendResponse(response, 200, travel);
    } catch (error) {
        sendResponse(response, 400, { message: error.message });
    }
}