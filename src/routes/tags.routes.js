const { Router } = require("express");

const TagsController = require('../controllers/TagsController');

const tagsController = new TagsController();

const tagsRoutes = Router();

tagsRoutes.get("/:plate_id", tagsController.show);
tagsRoutes.delete("/:id", tagsController.delete);

module.exports = tagsRoutes;