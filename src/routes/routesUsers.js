import { Router } from "express";
import { controllerUsers } from "../controller/users.js";
const routesUsers = Router()

const userController = new controllerUsers()
routesUsers.post("/users", async (req, res) => {
  await userController.postUser(req, res)
})
routesUsers.get("/users", async (req, res) => {
  const sql = `select * from users`
  await userController.getUsers(sql, res)
})
routesUsers.get("/users/:id", async (req, res) => {
  await userController.getUserById(req, res)
})
routesUsers.get("/user/:email", async (req, res) => {
  await userController.getUserByEmail(req, res)
})
routesUsers.put("/users/:email", async (req, res) => {
  await userController.updateUser(req, res)
})
routesUsers.delete("/users/:id", async (req, res) => {
  await userController.deleteUser(req, res)
})

export default routesUsers