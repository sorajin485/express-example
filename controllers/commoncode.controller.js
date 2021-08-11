const commoncodeModel = require("../models/commoncode.model.js");

exports.commoncode_get = (req,res) => {
  console.log("get commoncode controller")
  commoncodeModel.commoncode_get(req,(err,data) => {
    res.send(data)
  })
}