const ukur = require("../models/ukur");
const carsRepository = require("../repositories/carRepository");

module.exports = {
  create(requestBody) {
    return carsRepository.create(requestBody);
  },

  update(id, requestBody) {
    return carsRepository.update(id, requestBody);
  },

  delete(id) {
    return carsRepository.delete(id);
  },

  get(id) {
    return carsRepository.find(id);
  },

  async findOne(id) {
    const cars = await carsRepository.findOne(id);
  },

  async list() {
    try {
      const cars = await carsRepository.findAll();
      const carsCount = await carsRepository.getTotalPost();
      return {
        data: cars,
        count: carsCount,
      };
    } catch (err) {
      throw err;
    }
  },
};
