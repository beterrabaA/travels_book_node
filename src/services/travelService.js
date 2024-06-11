import { findTravel } from "../models/travels"

export const getTravelByIdService = async (id, expanded, optimized) => {
    const result = await findTravel(id)
    const travel = result.rows[0]
    if (!travel) throw new Error('product not found')

    return travel
}