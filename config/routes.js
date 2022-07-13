const express = require("express");
const controllers = require("../app/controllers");
const apiRouter = express.Router();
const path = require("path");
const multer = require("multer");

const res = require("express/lib/response");
const app = express();
const fs = require("fs");

// app.use('/public/images', express.static('images'));
apiRouter.use(express.static(__dirname + "./app/public/"));

// Path ke directory public
// Yang bakal kita jadikan public
// Sehingga user bisa akses CSS dan Javascript
// Di browser
// const PUBLIC_DIRECTORY = path.join(__dirname, "./public", "./views");

// upload foto
global.__basedir = __dirname;

const diskStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "./public/uploads")); // set the destination
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    ); // set the file name dynamically
  },
});
const uploadFile = multer({ storage: diskStorage });

apiRouter.get("/", controllers.api.v1.carController.main);
apiRouter.get("/cars", controllers.api.v1.carController.searchCar);
// apiRouter.get("/api/v1/cars", controllers.api.v1.carController.indexAdmin);
// apiRouter.get("/api/v1/cars/create", controllers.api.v1.carController.formAdd);
apiRouter.get(
  "/api/v1/cars/update/:id",
  controllers.api.v1.carController.formUpdate
);

apiRouter.get("/api/v1/cars", controllers.api.v1.carController.listCar);
apiRouter.post(
  "/api/v1/cars",
  uploadFile.single("photo"),
  controllers.api.v1.carController.createCar
);
apiRouter.post(
  "/api/v1/cars/update/:id",
  controllers.api.v1.carController.updateCar
);
apiRouter.get("/api/v1/cars/:id", controllers.api.v1.carController.showCar);
apiRouter.delete(
  "/api/v1/cars/:id",
  controllers.api.v1.carController.destroyCar
);

//error handler
apiRouter.get("/api/v1/errors", () => {
  throw new Error(
    "The Industrial Revolution and its consequences have been a disaster for the human race."
  );
});

apiRouter.use(controllers.api.main.onLost);
apiRouter.use(controllers.api.main.onError);

module.exports = apiRouter;
