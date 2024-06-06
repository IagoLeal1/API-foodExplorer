const knex = require("../database/knex");
const { hash } = require("bcryptjs");
const AppError = require("../utils/AppError");

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body;

    const checkUserExists = await knex("users").where({ email });
    const minPassword = password

    if (checkUserExists.length > 0) {
      throw new AppError("Este e-mail já está em uso.");
    }
    if (minPassword.length < 6) {
      throw new AppError("Digite uma senha com pelo menos 6 caracteres");
    }

    const hashedPassword = await hash(password, 8);

     await knex("users").insert({ name, email, password: hashedPassword });

    return response.status(201).json();
  }
}

module.exports = UsersController;