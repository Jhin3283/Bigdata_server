const models = require("../models");
const { Op } = require("sequelize");

module.exports = {
    post: async (req, res) => {
        let { ShipName, startDate, endDate } = req.body;
        let data = [];
        let start = startDate + " " + "00:01:00"
        let end = endDate + " " + "23:59:59"
        const filteredNavInfo = await models.nav_info.findAll({
          where: { ShipName, DataInfo:{[Op.between]: [ start , end]}},
          //where: {ShipName, DataInfo: startDate + "T01:00:00.000Z" }
        });
        async function arrPush() {
        //   filteredInernalCombusionEngine.sort(function (a, b) {
        //     if (a.size > b.size) return -1;
        //     if (a.size === b.size) return 0;
        //     if (a.size < b.size) return 1;
        //   });
        // if(page === 1){
        //     console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        //   result = filteredShipOperation.slice(0, 13801)
        // }
        // else if(page === 2){
        //     console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
        //     result = filteredShipOperation.slice(14402, 28201)
        // } else {
        //     result = filteredShipOperation
        // }
        }
        try {
          //await arrPush();
          data = filteredNavInfo
          return res.status(200).json({ data  });
        } catch {
          return console.log("@@@@! ERRRRRR !@@@@");
        }
      },
}