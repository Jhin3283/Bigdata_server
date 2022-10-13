const models = require("../models");
const { Op } = require("sequelize");

module.exports = {
    post: async (req, res) => {
        const { ShipName, startDate, endDate } = req.body;
        let data = [];
        let StartDate = new Date(startDate)
        let EndDate = new Date(endDate)
         const filteredEngineVibrationInfo = await models.engine_vibration_info.findAll({
           where: { ShipName, DATE: { [Op.between]: [new Date(startDate), new Date(endDate)]}}
           //where: {DATE: { [Op.between]: [Date.parse(startDate), Date.parse(endDate)]}}
         });
        async function arrPush() {
        //   filteredInernalCombusionEngine.sort(function (a, b) {
        //     if (a.size > b.size) return -1;
        //     if (a.size === b.size) return 0;
        //     if (a.size < b.size) return 1;
        //   });
        // console.log(new Date(startDate))
        // console.log(new Date(endDate))
        //console.log(filteredEngineVibrationInfo[5].DATE)
        //console.log(typeof(Date.parse(startDate)))
        //filteredEngineVibrationInfo.map((e)=> e.dataInfo)
        data = filteredEngineVibrationInfo;
        }
        try {
          await arrPush();
          return res.status(200).json({ data  });
        } catch {
          return console.log("@@@@! ERRRRRR !@@@@");
        }
      },
}