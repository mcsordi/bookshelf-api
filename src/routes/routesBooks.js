import { Router } from "express";
import { controllerBooks } from "../controller/books.js";
const routesBooks = Router()

const bookController = new controllerBooks()
routesBooks.post("/book", async (req, res) => {
  await bookController.postBook(req, res)
})
routesBooks.get("/books", async (req, res) => {
  await bookController.getAllBooks(res)
})
routesBooks.get("/book/:id", async (req, res) => {
  await bookController.getById(req, res)
})
routesBooks.get("/categories", async (req, res) => {
  await bookController.getCategories(res)
})
routesBooks.get("/highlights", async (req, res) => {
  await bookController.getHighliths(res)
})
routesBooks.put("/book/:id", async (req, res) => {
  await bookController.updateBook(req, res)
})
routesBooks.delete("/book/:id", async (req, res) => {
  await bookController.deleteBook(req, res)
})


export default routesBooks