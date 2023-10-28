import express from 'express'
import router from './router'
import { db } from './model/db'

// Middlewares
const app = express()
app.use(express.json())
app.use("/api/", router)

// Ligando servidor
const port = 3000
app.listen(port, async () => {
  await db.connect()
  console.log("Banco de dados conectado com sucesso!")
  console.log(`Servidor ligado na porta ${port}!`)
})