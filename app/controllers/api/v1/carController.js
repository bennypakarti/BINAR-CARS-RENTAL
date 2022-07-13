const carService = require("../../../services/carService");
const ukurService = require("../../../services/ukurService");
const { readFile } = require("fs").promises;
const express = require("express");

module.exports = {
  async main(req, res) {
    res.send(await readFile("./public/index.ejs", "utf8"));
  },

  async searchCar(req, res) {
    res.send(await readFile("./public/carimobil.ejs", "utf8"));
  },

  // async formAdd(req, res) {
  //   res.send(await readFile("./views/addcar.ejs", "utf8"));
  // },

  async formUpdate(req, res) {
    const cars = carService.findOne(req.params.id);
    const coba = await ukurService.list();
    res.render("/views/edit", { cars, coba });
  },

  listCar(req, res) {
    carService
      .list()
      .then(({ data, count }) => {
        res.status(200).json({
          status: "OK",
          data: { posts: data },
          meta: { total: count },
        });
      })
      .catch((err) => {
        res.status(400).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  createCar(req, res) {
    carService
      .create({
        size_id: req.body.size_id,
        plate: req.body.plate,
        manufacture: req.body.manufacture,
        model: req.body.model,
        photo: req.file.filename,
        rentPerDay: req.body.rentPerDay,
        capacity: req.body.capacity,
        description: req.body.description,
        transmission: req.body.transmission,
        type: req.body.type,
        year: req.body.year,
        options: req.body.options,
        specs: req.body.specs,
        availableAt: req.body.availableAt,
      })
      .then((cars) => {
        res.render("index");
      })
      .catch((err) => {
        res.status(422).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  updateCar(req, res) {
    carService
      .update({
        size_id: req.body.size_id,
        plate: req.body.plate,
        manufacture: req.body.manufacture,
        model: req.body.model,
        photo: req.file.filename,
        rentPerDay: req.body.rentPerDay,
        capacity: req.body.capacity,
        description: req.body.description,
        transmission: req.body.transmission,
        type: req.body.type,
        year: req.body.year,
        options: req.body.options,
        specs: req.body.specs,
        availableAt: req.body.availableAt,
      })
      .then(() => {
        res.render("index");
      })
      .catch((err) => {
        res.status(422).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  showCar(req, res) {
    carService
      .get(req.params.id)
      .then((post) => {
        res.status(200).json({
          status: "OK",
          data: post,
        });
      })
      .catch((err) => {
        res.status(422).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  destroyCar(req, res) {
    carService
      .delete(req.params.id)
      .then(() => {
        res.status(204).end();
      })
      .catch((err) => {
        res.status(422).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },
};
