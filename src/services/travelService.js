import { findTravel } from "../models/travels.js"
import { requestRickAndMortyData } from "../utils/index.js"

export const getTravelByIdService = async (id, expanded, optimized) => {
    const result = await findTravel(id)
    const travel = result.rows[0]
    if (!travel) throw new Error('product not found')

    const rickData = await requestRickAndMortyData(travel.travel_stops)
    console.log(rickData);
    return travel
}