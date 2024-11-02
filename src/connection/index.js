import mysql from "mysql2/promise"
import dotenv from "dotenv/config"
const database = process.env.DATABASE
const password = process.env.PASSWORD
const host = process.env.HOST

export const connection = await mysql.createConnection(
  `${host}://root:${password}@junction.proxy.rlwy.net:22121/${database}`,

)

connection.connect()