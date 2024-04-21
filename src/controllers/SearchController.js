const knex = require('../database/knex')
const AppError = require('../utils/AppError')

class searchController {
    async show(request, response) {
        const { query } = request.query;

        try {
            const results = await knex('plates')
                .where('name', 'like', `%${query}%`)
                .orWhere('ingredients', 'like', `%${query}%`)
                .select('id', 'name', 'description', 'price', 'type', 'photo', 'ingredients');

            response.json(results);
        } catch (error) {
            alert('Erro ao buscar pratos:');
            response.status(500).json({ error: 'Erro interno do servidor' });
        }
    }
}

module.exports = searchController