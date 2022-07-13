const express = require("express");
const router = require("../config/routes");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json());

/** Install request logger */

// Bilang ke express kalo kita mau
// pake EJS sebagai view engine
app.set("view engine", "ejs");

/** Install JSON request parser */
app.use(express.json());
app.use(express.static("app/public"));
app.use(express.static("app/public/uploads"));
app.use(express.static("app/views"));
/** Install Router */
app.use(router);

// Set format request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json());

const swaggerDocument = YAML.load("./opapi2.yaml");
// Set PUBLIC_DIRECTORY sebagai
// static files di express

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
