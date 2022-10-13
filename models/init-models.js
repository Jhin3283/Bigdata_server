var DataTypes = require("sequelize").DataTypes;
var _engine_vibration_info = require("./engine_vibration_info");
var _equipment_info = require("./equipment_info");
var _nav_info = require("./nav_info");
var _vibration_info = require("./vibration_info");

function initModels(sequelize) {
  var engine_vibration_info = _engine_vibration_info(sequelize, DataTypes);
  var equipment_info = _equipment_info(sequelize, DataTypes);
  var nav_info = _nav_info(sequelize, DataTypes);
  var vibration_info = _vibration_info(sequelize, DataTypes);


  return {
    engine_vibration_info,
    equipment_info,
    nav_info,
    vibration_info,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
