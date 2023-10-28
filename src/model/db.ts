require('dotenv').config()
import { Client } from "pg"


export const db = new Client({
  host: "localhost",
  port: 5432,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  user: process.env.DB_USER
})