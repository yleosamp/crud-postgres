import { Router, Request, Response } from "express";
import { addUser, listAllUsers } from "./controllers/crudController";

const router = Router()

export default router
  .get("/test", listAllUsers)
  .post("/register", addUser)