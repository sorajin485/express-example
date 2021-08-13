var express = require('express')
var router = express.Router()
const company_code_Controller = require("../controllers/company_code.controller.js")

router.get("/",company_code_Controller.company_code_get)

module.exports = router;