const carService = require("../../../services/carService");
const fs = require("fs");
const { readFile } = require("fs").promises;
const { Ukur } = require("../../../models/ukur");
const path = require("path");
const express = require("express");
const app = express();
const PUBLIC_DIRECTORY = path.join(__dirname, "../../../public");
app.use(express.static(PUBLIC_DIRECTORY));
app.use(express.static("public"));
app.set("view engine", "ejs");

module.exports = {
  formAdd(req, res) {
    Ukur.findAll({
      order: ["id"],
    }).then((ukur) => {
      res.render("addcar", { ukur });
    });
  },
};
