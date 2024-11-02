import { app } from "./view/index.js"
const port = process.env.PORT || 3000

app.listen(port, () => {
  return console.log(`App listen at the port ${port}`)
})