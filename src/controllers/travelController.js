import { findAllTravels } from "../models/travels.js";
import { sendResponse } from "../utils/index.js";

export async function getTravels(request, response) {
    try {
        const result = await findAllTravels();
        sendResponse(response, 200, result.rows);
    } catch (error) {
        sendResponse(response, 400, { message: error.message });
    }
}