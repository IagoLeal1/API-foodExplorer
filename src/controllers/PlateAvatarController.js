const knex = require("../database/knex")
const AppError = require("../utils/AppError")
const diskStorage = require("../providers/DiskStorage");
const { response } = require("express");

class PlateAvatarController {

    async update() {
        const plate_id = request.plate.id;
        const avatarFileName = request.file.filename;

        const plate = await knex("plates")
        .where({ id: plate_id }).first();

        if(plate.avatar) {
            await diskStorage.deletefile(plate.avatar)

        }

        const filename = await diskStorage.saveFile(plate.avatar)
        plate.avatar = filename

        await knex("plates").update(plate).where({ id: plate_id })

        return response.json(plate)

    }
}

module.exports = PlateAvatarController;