var express = require('express')
var router = express.Router()
const userController = require("../controllers/user.controller.js")


router.get("/",userController.users)
//router.post("/")

module.exports = router;