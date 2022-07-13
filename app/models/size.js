'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Size extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Size.hasMany(models.Cars, {
        as: 'Cars',
        foreignKey: 'size_id'
      })
    }
  }
  Size.init({
    ukuran: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Size',
  });
  return Size;
};


// Size.associate = function (models) {
//   // associations can be defined here
//   Size.hasMany(models.Cars, {
//     foreignKey: 'Size_id',
//     as: 'car',
//   });
// };