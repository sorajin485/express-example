var express = require('express')
var router = express.Router()
const commoncodeController = require("../controllers/commoncode.controller.js")


router.get("/",commoncodeController.commoncode_get)
//router.post("/")

module.exports = router;