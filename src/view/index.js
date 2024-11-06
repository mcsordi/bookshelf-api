import express from "express"
import cors from "cors"
import routesBooks from "../routes/routesBooks.js"
import routesWriter from "../routes/routesWriters.js"


export const app = express()

app.use(cors())
app.use(express.json())
app.use(routesBooks)
app.use(routesWriter)