const express = require('express')
const router = express.Router()
const { getAchivementsData } = require("../controllers/acheivementsController")

router.route("/acheivements").get(getAchivementsData);

module.exports = router