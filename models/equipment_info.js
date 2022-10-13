const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('equipment_info', {
    ShipName: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Equipmentname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DataInfo: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Communication_Equipment: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ID: {
      type: DataTypes.STRING(20),
      allowNull: true,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'equipment_info',
    timestamps: false
  });
};
