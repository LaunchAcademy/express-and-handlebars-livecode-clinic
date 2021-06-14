import express from "express"
import magicalCreaturesRouter from "./magicalCreaturesRouter.js"

const rootRouter = new express.Router()

// localhost:3000/
rootRouter.get('/', (req, res) => {
  res.render('index')
})

// localhost:3000/magical-creatures
rootRouter.use("/magical-creatures", magicalCreaturesRouter)

export default rootRouter