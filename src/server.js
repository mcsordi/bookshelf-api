import { app } from "./view/index.js"
const port = process.env.PORT || 3001

app.listen(port, () => {
  return console.log(`App listen at the port ${port}`)
})