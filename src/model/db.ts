require('dotenv').config()
import { Client } from "pg"

const env = process.env

export const db = new Client({
  host: "localhost",
  port: 5432,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  user: env.DB_USER
})