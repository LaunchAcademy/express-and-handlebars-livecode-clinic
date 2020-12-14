import express from "express"

const fields = ["title", "url", "description"]

// `creatures` variable should return to you the creature objects that you need!
import creatures from "../creatures.js"

const magicalCreaturesRouter = new express.Router()

magicalCreaturesRouter.get("/", (req, res) => {
  res.render("creatures/index", { creatures: creatures })
})

magicalCreaturesRouter.get("/:creatureName", (req, res) => {
  const creatureName = req.params.creatureName

  const creatureData = creatures.find(
    (creature) => creature.name === creatureName
  )

  // Another valid way, but less ideal as it would iterate over the whole array
  // let creatureData
  // creatures.forEach((creature) => {
  //   if (creature.name === creatureName) {
  //     creatureData = creature
  //   }
  // })

  res.render("creatures/show", { creature: creatureData })
})

export default magicalCreaturesRouter
