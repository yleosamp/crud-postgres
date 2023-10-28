import { Response, Request } from "express";
import { db } from "../model/db";

export const addUser = async (req: Request, res: Response) => {
  const name = req.body.nome
  const age = req.body.idade
  const data = `${req.body.data.split('-')[2]}-${req.body.data.split('-')[1]}-${req.body.data.split('-')[0]}`
  const apelido = req.body.apelido

  const query = await db.query(`INSERT INTO teste(nome, idade, data_nasc, apelido) VALUES ('${name}', '${age}', '${data}', '${apelido}')`)
  query

  return res.status(201).json({ "Adicionado":  query })
}

export const listAllUsers = async (req: Request, res: Response) => {
  const result = await db.query("SELECT id, nome, apelido, idade, to_char(data_nasc, 'DD/MM/YYYY') AS data_nasc FROM teste")

  return res.status(200).json( result.rows )
}

export const updateUser = async (req: Request, res: Response) => {
  const id = req.body.id
  const name = req.body.nome
  const age = req.body.idade
  const data = `${req.body.data.split('-')[2]}-${req.body.data.split('-')[1]}-${req.body.data.split('-')[0]}`
  const apelido = req.body.apelido

  const verifyId = await db.query(`SELECT id, nome, idade, data_nasc, apelido FROM teste WHERE id = ${id}`)

  if(verifyId.rows.length !== 0) {
    await db.query(`UPDATE teste SET nome = '${name}', idade = '${age}', data_nasc = '${data}', apelido = '${apelido}' WHERE id = ${id}`)
  } else {
    return res.status(201).json({ message: 'ID inexistente! Crie um usuário na rota /register'})
  }

  return await res.status(202).json(verifyId.rows)
}

export const deleteUser = async (req: Request, res: Response) => {
  const id = req.body.id

  const query = await db.query(`DELETE FROM teste WHERE id = ${id}`)
  query

  return res.status(200).json({ deleted: `O usuário de ID ${id} foi deletado com sucesso.` })
}