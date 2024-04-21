const { Router } = require("express");

const usersRouter = require("./users.routes");
const platesRouter = require("./plates.routes");
const tagsRouter = require("./tags.routes");
const sessionsRouter = require("./sessions.routes");
const gettersRoutes = require('./getters.routes')
const searchRoutes = require('./search.routes')

const routes = Router();
routes.use("/users", usersRouter);
routes.use("/sessions", sessionsRouter);
routes.use("/plates", platesRouter);
routes.use("/tags", tagsRouter);
routes.use('/getters', gettersRoutes)
routes.use("/search", searchRoutes)

module.exports = routes;