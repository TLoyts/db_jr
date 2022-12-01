const charactersRouter = require('./characters')
const planetsRouter = require('./planets')

function routerApi (app) {
  app.use('/api/characters', charactersRouter)
  app.use('/api/planets', planetsRouter)
}

module.exports = routerApi
