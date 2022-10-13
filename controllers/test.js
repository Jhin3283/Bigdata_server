const models = require("../models");

module.exports = {
    get: async (req,res) =>{
        const user = await models.users.findAll();
        if(user.length === 0){
            console.log(user)
                return res.status(409).json({message: "fail"})
            } else{
                return res.status(200).json({message: user})
            }
        }
}