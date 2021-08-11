const userModel = require("../models/user.model.js");

exports.users = (req,res) => {
  console.log("get users controller")
  userModel.users(req,(err,data) => {
    res.send(data)
  })
}