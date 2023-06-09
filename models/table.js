'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tables extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tables.hasMany(models.Reservation, {
        foreignKey: 'table_id',
        as: 'reservations'
      })
    }
  }
  Tables.init({
    name: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tables',
  });
  return Tables;
};