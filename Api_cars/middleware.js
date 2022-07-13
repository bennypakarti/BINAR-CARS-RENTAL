const Car = require("./car");

function setCar(req, res, next) {
  const car = Car.find(req.params.id);
  if (!car) {
    res.status(404).json({
      error: "Car not found!",
    });

    return;
  }

  req.car = car;
  next();
}

module.exports = {
  setCar,
};
