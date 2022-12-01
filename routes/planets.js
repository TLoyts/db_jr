const express = require('express')
const router = express.Router()
const PlanetsService = require('../services/PlanetsService')
const service = new PlanetsService()

// all planets
router.get('/', async (req, res) => {
  const planets = await service.find()
  res.json(planets)
})

// id planet
router.get('/:id', async (req, res) => {
  const { id } = req.params
  const planets = await service.findOne(id)
  res.json(planets)
})

module.exports = router
