const pool = require('../libs/postgres')

class PlanetsService {
  constructor () {
    this.generate()
    this.pool = pool
    this.pool.on('error', (err) => console.log(err))
  }

  async generate () {
  }

  async find () {
    const query = 'SELECT * FROM planets'
    const rta = await this.pool.query(query)
    return rta.rows
  }

  async findOne (id) {
    const query = 'SELECT * FROM planets'
    const rta = await this.pool.query(query)
    return rta.rows.find(item => item.id == id)
  }
}

module.exports = PlanetsService
