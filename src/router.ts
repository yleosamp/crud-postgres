import { Router, Request, Response } from "express";
import { addUser, deleteUser, listAllUsers, updateUser } from "./controllers/crudController";

const router = Router()

export default router
  .get("/list", listAllUsers)
  .post("/register", addUser)
  .patch("/edit", updateUser)
  .delete("/delete", deleteUser)