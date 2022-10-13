const express = require("express");
const router = express.Router();
const engine_vibration_info = require("../controllers/engine_vibration_info")
const vibration_info = require("../controllers/vibration_info")
const nav_info = require("../controllers/nav_info")
const equipment_info = require("../controllers/equipment_info")

router.post("/engineVibrationInfo",engine_vibration_info.post)
router.post("/vibrationInfo",vibration_info.post)
router.post("/navInfo",nav_info.post)
router.post("/equipmentInfo",equipment_info.post)

module.exports = router