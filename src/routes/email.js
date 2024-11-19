import { Router } from "express";
import { main } from "../controller/email.js";
const route = Router()

route.post("/email/", async (req, res) => {
  const opt = req.body.opt
  const email = req.body.email

  res.status(200).json(await main(opt, email))
})
export default route