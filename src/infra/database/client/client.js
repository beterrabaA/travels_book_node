import pg from 'pg'
import { config } from '../config/config.js'
const { Client } = pg
 
export const client = new Client(config)