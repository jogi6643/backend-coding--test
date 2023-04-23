const express = require("express");
const {getAllRides,createRides,getSingleRides} = require("../controllers/ridesController")
const router = express.Router();
router.route("/rides").post(createRides);
router.route("/rides").get(getAllRides);
router.route("/ride/:id").get(getSingleRides);
module.exports = router;
