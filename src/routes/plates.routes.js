const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const PlateController = require("../controllers/PlateController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")
const verifyUserAuthorization = require("../middlewares/verifyUserAuthorization")

const platesRoutes = Router();

const plateController = new PlateController();
const upload = multer(uploadConfig.MULTER);

platesRoutes.use(ensureAuthenticated);

platesRoutes.get("/", plateController.index);
platesRoutes.post("/", verifyUserAuthorization("admin"), plateController.create);
platesRoutes.get("/:id", plateController.show);
platesRoutes.delete("/:id", verifyUserAuthorization("admin") , plateController.delete);
platesRoutes.patch("/avatar",  verifyUserAuthorization(["admin"]), upload.single("avatar"), (request, response) => {
  console.log(request.file.filename)
  const message = "Imagem salva com sucesso !!"
  response.json(message);
})

module.exports = platesRoutes;