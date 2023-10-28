import { Response, Request } from "express";
import { db } from "../model/db";

export const addUser = async (req: Request, res: Response) => {
  const name = req.body.nome
  const age = req.body.idade
  const data = `${req.body.data.split('-')[2]}-${req.body.data.split('-')[1]}-${req.body.data.split('-')[0]}`
  const apelido = req.body.apelido

  await db.query("INSERT INTO teste(nome, idade, data_nasc, apelido) VALUES (?, ?, ?, ?)", [name, age, data, apelido])
  await db.end()
}

export const listAllUsers = async (req: Request, res: Response) => {
  const result = await db.query("SELECT id, nome, apelido, idade, to_char(data_nasc, 'DD/MM/YYYY') AS data_nasc FROM teste")
  await db.end()

  return res.status(200).json( result.rows )
}
