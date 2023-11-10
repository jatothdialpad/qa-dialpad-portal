const express = require('express')
const router = express.Router()
const { postExecute, getWorkflow, getWorkflowStatus } = require("../controllers/executionController")
router.route("/workflows/execute").post(postExecute)
router.route("/workflows/:id").get(getWorkflow)
router.route("/workflows/status/:id").get(getWorkflowStatus)
module.exports = router