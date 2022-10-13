const models = require("../models");
const { Op } = require("sequelize");

module.exports = {
    post: async (req, res) => {
        const { ShipName, selectTool, startDate, endDate} = req.body;
        let data = [];
        const filteredEquipmentInfo = await models.equipment_info.findAll({
          where: { ShipName, Communication_Equipment: selectTool},
          //where: {ShipName, DataInfo: { [Op.between]: [new Date(startDate), new Date(endDate)]}}
        });
        async function arrPush() {
        //   filteredInernalCombusionEngine.sort(function (a, b) {
        //     if (a.size > b.size) return -1;
        //     if (a.size === b.size) return 0;
        //     if (a.size < b.size) return 1;
        //   });
        data = filteredEquipmentInfo;
        }
        try {
          await arrPush();
          return res.status(200).json({ data  });
        } catch {
          return console.log("@@@@! ERRRRRR !@@@@");
        }
      },
}