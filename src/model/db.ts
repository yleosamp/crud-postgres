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

export const createTable = async () => {
  return await db.query(`CREATE TABLE IF NOT EXISTS teste(
    id SERIAL PRIMARY KEY,
    nome VARCHAR(60),
    data_nasc DATE,
    idade INTEGER,
    apelido VARCHAR(20)
  );`)
}