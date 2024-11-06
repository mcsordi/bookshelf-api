import { Router } from "express";
import { controller } from "./controller/index.js";
const routes = Router()

const bookController = new controller()
routes.post("/book", async (req, res) => {
  await bookController.postBook(req, res)
})
routes.post("/writer", async (req, res) => {
  await bookController.postWriter(req, res)
})
routes.get("/books", async (req, res) => {
  await bookController.getAllBooks(res)
})
routes.get("/book/:id", async (req, res) => {
  await bookController.getById(req, res)
})
routes.get("/categories", async (req, res) => {
  await bookController.getCategories(res)
})
routes.get("/favorites", async (req, res) => {
  await bookController.getFavorites(res)
})
routes.get("/highlights", async (req, res) => {
  await bookController.getHighliths(res)
})
routes.get("/writer/:id", async (req, res) => {
  await bookController.getWriterById(req, res)
})
routes.get("/writer", async (req, res) => {
  await bookController.getWriter(res)
})
routes.put("/book/:id", async (req, res) => {
  await bookController.updateBook(req, res)
})
routes.put("/writer/:id", async (req, res) => {
  await bookController.updateWriter(req, res)
})
routes.delete("/book/:id", async (req, res) => {
  await bookController.deleteBook(req, res)
})
routes.delete("/writer/:id", async (req, res) => {
  await bookController.deleteWriter(req, res)
})

export default routes