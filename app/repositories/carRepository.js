const { Cars } = require("../models");
const { Ukur } = require("../models");
module.exports = {
  create(createArgs) {
    return Cars.create(createArgs);
  },

  update(id, updateArgs) {
    return Cars.update(updateArgs, {
      where: { id },
    });
  },

  delete(id) {
    return Cars.destroy(id);
  },

  find(id) {
    return Cars.findByPk(id);
  },

  findOne(id) {
    return Cars.findOne({
      where: { id },
      include: [{ model: Ukur, as: "size" }],
    });
  },

  findAll() {
    return Cars.findAll({
      include: [{ model: Ukur, as: "size" }],
    });
  },

  getTotalPost() {
    return Cars.count();
  },
};
