const { Router } = require('express')

const searchRoutes = Router()

const uploadConfig = require('../configs/upload')
const multer = require('multer')

const upload = multer(uploadConfig.MULTER)

const SearchController = require('../controllers/SearchController')

const searchController = new SearchController()

const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

searchRoutes.get('/', searchController.show)

module.exports = searchRoutes