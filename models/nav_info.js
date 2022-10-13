const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nav_info', {
    MMSI: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ShipName: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Latitude: {
      type: DataTypes.DOUBLE(12,5),
      allowNull: true
    },
    Longitude: {
      type: DataTypes.DOUBLE(12,4),
      allowNull: true
    },
    SOG: {
      type: DataTypes.DOUBLE(5,1),
      allowNull: true
    },
    COG: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Heading: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Datainfo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ID: {
      type: DataTypes.STRING(20),
      allowNull: true,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'nav_info',
    timestamps: false
  });
};
