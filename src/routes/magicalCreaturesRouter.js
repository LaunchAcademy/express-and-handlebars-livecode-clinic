import express from "express"

const fields = ["title", "url", "description"]

// `creatures` variable should return to you the creature objects that you need!
import creatures from "../creatures.js"

const magicalCreaturesRouter = new express.Router()

magicalCreaturesRouter.get("/", (req, res) => {
  //This will render a hbs file found directly under views folder
  // res.render("creatures-list", { creatures: creatures })

  //this will find an index hbs file that is located under a views/magicalCreatures sub folder.  This will help with organization as apps grow.
  res.render("magicalCreatures/index", { creatures: creatures })
})

//dynamic handling for the show page
magicalCreaturesRouter.get("/:creatureName", (req, res) => {
  const creatureName = req.params.creatureName

  let creatureData

  for (let index = 0; index < creatures.length; index++) {
    if (creatureName === creatures[index].name) {
      creatureData = creatures[index]
    }
  }

  //we could also use something like .find()
  //let creatureData = creatures.find(creature => creature.name === creatureName)

  res.render("magicalCreatures/show", { creature: creatureData })
})

//not ideal hardcoding of paths
// magicalCreaturesRouter.get("/unicorn", (req, res) => {

// })

// magicalCreaturesRouter.get("/dragon", (req, res) => {

// })

export default magicalCreaturesRouter
