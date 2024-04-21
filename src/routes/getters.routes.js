const { Router } = require('express')

const getterRoutes = Router()

const GettersController = require('../controllers/GettersController')

const gettersController = new GettersController()

getterRoutes.get('/:category', gettersController.getMain)

module.exports = getterRoutes