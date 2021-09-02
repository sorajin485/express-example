var express = require('express')
var router = express.Router()
const company_code_Controller = require("../controllers/company_code.controller.js")

router.get("/",company_code_Controller.company_code_Read)

router.post("/", company_code_Controller.company_code_Create)

router.patch("/", company_code_Controller.company_code_Update)

router.delete("/", company_code_Controller.company_code_Delete)

module.exports = router;