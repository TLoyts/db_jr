const express = require('express')
const router = express.Router()
const CharactersService = require('../services/CharactersService')
const service = new CharactersService()

// all characters (offset and limit)
router.get('/', async (req, res) => {
  const offset = req.query.offset
  const limit = req.query.limit
  // obtengo los datos desde el servicio y los muestro con la respuesta
  const character = await service.find(offset, limit)
  res.json(character)
})

// id universe
router.get('/universe/:id', async (req, res) => {
  // obtengo los datos desde el servicio y los muestro con la respuesta
  const { id } = req.params
  const character = await service.findByUniverse(id)
  res.json(character)
})

// id role
router.get('/role/:id', async (req, res) => {
  // obtengo los datos desde el servicio y los muestro con la respuesta
  const { id } = req.params
  const character = await service.findByRole(id)
  res.json(character)
})

// id character
router.get('/:id', async (req, res) => {
  const { id } = req.params
  const character = await service.findOne(id)
  res.json(character)
})

module.exports = router
