const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vibration_info', {
    MMSI: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ShipName: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    DataInfo: {
      type: DataTypes.TIME,
      allowNull: true
    },
    Tachometer: {
      type: DataTypes.FLOAT(7,4),
      allowNull: true
    },
    Engine_body_vibration_at_fore_top_longitudinal_direction: {
      type: DataTypes.DOUBLE(10,6),
      allowNull: true
    },
    Engine_body_vibration_at_fore_top_transverse_direction: {
      type: DataTypes.DOUBLE(10,6),
      allowNull: true
    },
    Engine_body_vibration_at_fore_top_vertical_direction: {
      type: DataTypes.DOUBLE(10,6),
      allowNull: true
    },
    Engine_body_vibration_at_aft_top_transverse_direction: {
      type: DataTypes.DOUBLE(10,6),
      allowNull: true
    },
    ID: {
      type: DataTypes.STRING(20),
      allowNull: true,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'vibration_info',
    timestamps: false
  });
};
