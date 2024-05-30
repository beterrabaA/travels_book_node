import pg from 'pg'
import { config } from '../config/config.js'
const { Client } = pg

export const client = new Client(config)

export const query = (text, params, callback) => {
    return client.query(text, params, callback)
}