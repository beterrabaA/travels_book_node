import { query } from "../infra/database/client/client.js";
import { transformSlotsToSQL } from "../utils/index.js";

export function findAllTravels() {
    return new Promise((resolve, reject) => {
        const queryText = 'SELECT * FROM travels;'
        const travelsDb = query(queryText)
        resolve(travelsDb);
        reject([])
    });
}

export function findTravel(id) {
    return new Promise((resolve, reject) => {
        const queryText = 'SELECT * FROM travels WHERE id = $1;'
        const travel = query(queryText, [id])
        resolve(travel)
        reject({})
    })
}

export function createTravel(data) {
    return new Promise((resolve, reject) => {
        const slots = transformSlotsToSQL(data)
        const queryText = `INSERT INTO travels(travel_stops) VALUES("{${slots}}");`
        console.log(queryText);
        resolve([])
        reject([])
    })
}

export function updateTravel(id,data) {
    return new Promise((resolve, reject) => {
        const queryText = 'UPDATE travels SET travel_stops = "{} WHERE id = $2;"'
    })
}