import { Router } from "express"
import { controllerWriters } from "../controller/writers.js"
const routesWriter = Router()

const writerControler = new controllerWriters()
routesWriter.post("/writer", async (req, res) => {
  await writerControler.postWriter(req, res)
})

routesWriter.get("/writer/:id", async (req, res) => {
  await writerControler.getWriterById(req, res)
})
routesWriter.get("/writer", async (req, res) => {
  await writerControler.getWriter(res)
})

routesWriter.put("/writer/:id", async (req, res) => {
  await writerControler.updateWriter(req, res)
})
routesWriter.delete("/writer/:id", async (req, res) => {
  await writerControler.deleteWriter(req, res)
})
export default routesWriter