const express = require('express')
const router = express.Router()
const { postExecute, getWorkflow } = require("../controllers/executionController")

router.route("/execute/:url").post(postExecute);

router.route("/workflows/:id").get(getWorkflow)


module.exports = router