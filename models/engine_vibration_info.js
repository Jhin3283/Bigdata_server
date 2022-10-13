const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('engine_vibration_info', {
    DATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ID: {
      type: DataTypes.STRING(20),
      allowNull: true,
      primaryKey: true
    },
    X: {
      type: DataTypes.DOUBLE(10,6),
      allowNull: true
    },
    Y: {
      type: DataTypes.DOUBLE(10,6),
      allowNull: true
    },
    Z: {
      type: DataTypes.DOUBLE(10,6),
      allowNull: true
    },
    OVERALL: {
      type: DataTypes.DOUBLE(10,7),
      allowNull: true
    },
    TEMPERATURE: {
      type: DataTypes.FLOAT(5,2),
      allowNull: true
    },
    HUMIDITY: {
      type: DataTypes.FLOAT(5,2),
      allowNull: true
    },
    ShipName: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'engine_vibration_info',
    timestamps: false
  });
};
