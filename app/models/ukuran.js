'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ukuran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ukuran.init({
    Small: DataTypes.STRING,
    Medium: DataTypes.STRING,
    Large: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ukuran',
  });
  return Ukuran;
};


// Ukuran.associate = function (models) {
//   // associations can be defined here
//   Ukuran.hasMany(models.Cars, {
//     foreignKey: 'ukuran_id',
//     as: 'car',
//   });
// };