const knex = require('../database/knex')

class GettersController {

    async getMain(request, response) {
        const { category } = request.params

        const plates = await knex('plates').where({ category }).orderBy('title')

        return response.json(plates)
    }
}

module.exports = GettersController