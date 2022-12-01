const pool = require('../libs/postgres')

class CharactersService {
  constructor () {
    this.generate()
    this.pool = pool
    this.pool.on('error', (err) => console.log(err))
  }

  async generate () {

  }

  async find (offset, limit) {
    if (offset && limit) {
      const consulta = `SELECT * FROM characters ORDER BY id OFFSET ${offset} FETCH NEXT ${limit} ROWS ONLY`
      console.log(consulta)
      const rta = await this.pool.query(consulta)
      return rta.rows
    } else if (limit) {
      const consultaTotal = 'SELECT COUNT (id) FROM characters;'
      const rtaTotal = await this.pool.query(consultaTotal)
      const rtaTotalNumber = Number(rtaTotal.rows[0].count)
      const pages = Math.ceil(rtaTotalNumber / limit)
      const pagination = []

      for (let index = 0; index < pages; index++) {
        const consulta = `SELECT * FROM characters ORDER BY id OFFSET ${index * limit} FETCH NEXT ${limit} ROWS ONLY`
        const rta = await this.pool.query(consulta)
        pagination.push(rta.rows)
      }

      return pagination
    } else {
      const consulta = 'SELECT * FROM characters ORDER BY universe'
      const rta = await this.pool.query(consulta)
      return rta.rows
    }
  }

  async findByUniverse (id) {
    const query = `SELECT * FROM characters WHERE universe = '${id}'`
    const rta = await this.pool.query(query)
    return rta.rows
  }

  async findByRole (id) {
    const query = `SELECT * FROM characters WHERE role = '${id}'`
    const rta = await this.pool.query(query)
    return rta.rows
  }

  async findOne (id) {
    const query = 'SELECT * FROM characters'
    const rta = await this.pool.query(query)
    return rta.rows.find(item => item.name == id)
  }
}

module.exports = CharactersService
