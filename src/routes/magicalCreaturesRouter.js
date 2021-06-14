import express from "express"

const fields = ['title', 'url', 'description']

// `creatures` variable should return to you the creature objects that you need!
import creaturesData from '../creatures.js'

const magicalCreaturesRouter = new express.Router()

magicalCreaturesRouter.get("/", (req, res) => {
  // console.log(creaturesData)
  
  res.render("magicalCreatures/index", { creatures: creaturesData })
})

magicalCreaturesRouter.get("/:creatureName", (req, res) => {
  const creatureString = req.params.creatureName
  // debugger

  // const creature = creaturesData.find((creature) => {
  //   return creature.name === creatureString
  // })

  const creature = creaturesData.find((creature) => {
    if (creature.name === creatureString) {
      return creature
    }
  })

  // const creatureToDisplay
  // creaturesData.forEach((creature) => {
  //   if (creature.name === creatureString) {
  //     creatureToDisplay = creature
  //   }
  // })

  // console.log(creature)

  res.render("magicalCreatures/show", { creature: creature })
})

export default magicalCreaturesRouter