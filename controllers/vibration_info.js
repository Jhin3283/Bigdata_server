const models = require("../models");
const { Op } = require("sequelize");

module.exports = {
    post: async (req, res) => {
        const { ShipName, startDate, endDate, startTime, endTime } = req.body;
        let data = [];
        let engineData =[];
        const filteredVibrationInfo = await models.vibration_info.findAll({
          where: { ShipName, DataInfo: { [Op.between]: [startTime, endTime ]}},
          //where: {ShipName}
        });
         const filteredEngineVibrationInfo = await models.engine_vibration_info.findAll({
           where: { ShipName, DATE: { [Op.between]: [startDate + "T01:00:00.000Z",endDate + "T23:59:59.000Z"]}}
           //where: {DATE: { [Op.between]: [Date.parse(startDate), Date.parse(endDate)]}}
         });
        async function arrPush() {
        //   filteredInernalCombusionEngine.sort(function (a, b) {
        //     if (a.size > b.size) return -1;
        //     if (a.size === b.size) return 0;
        //     if (a.size < b.size) return 1;
        //   });
           //result = filteredVibrationInfo
          // console.log(typeof(filteredVibrationInfo[0].DataInfo))
          //console.log(typeof(filteredVibrationInfo[0].DataInfo))
          // console.log(startTime)
          // console.log(typeof(start))
          // console.log(typeof(filteredVibrationInfo[0].DataInfo))
          data = filteredVibrationInfo;
        }
        async function arrPushEngine() {
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
          engineData = filteredEngineVibrationInfo;
          }
        try {
          // if(dataType == 0){
          // await arrPush();
          // return res.status(200).json({ data  });
          // } else {
            await arrPush();
            await arrPushEngine();
            return res.status(200).json({ data,engineData  });
          //}
        } catch {
          return console.log("@@@@! ERRRRRR !@@@@");
        }
      },
}