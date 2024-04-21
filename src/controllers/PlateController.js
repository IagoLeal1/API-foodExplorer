const knex = require('../database/knex');

class PlateController {
  async create(request, response) {
    const { title, description, category, price, tag } = request.body;
    const { id } = request.params;

    const [plate_id] = await knex('plates').insert({
      title,
      description,
      category,
      price,
      avatar: '',
    });

    const tagsInsert = tag.map((name) => {
      return {
        name,
        id,
        plate_id: plate_id,
      };
    });

    await knex('tags').insert(tagsInsert);

    return response.json({ title, description, category, price, tag });
  }

  async update(request, response) {
    const { title, description, category, price, tags } = request.body;
    const { id } = request.params;
  }

  async show(request, response) {
    const { id } = request.params;

    const plates = await knex('plates').where({ id })

    return response.json(plates)

  }

  async delete(request, response) {
    const { id } = request.params;

    await knex('plate').where({ id }).delete();

    const message = 'Prato excluido com sucesso!!';

    return response.json(message);
  }

  async index(request, response) {
    const { title, tags } = request.query;
    const { id } = request.params;

    let plateIndex;

    if (tags) {
      const filterTags = tags.split(',').map((tag) => tag.trim());

      plateIndex = await knex('tags').whereIn('name', filterTags);
    } else {
      plateIndex = await knex('plates').orderBy('title');
    }

    return response.json(plateIndex);
  }
}

module.exports = PlateController;
