const company_code_Model = require("../models/company_code.model.js");

exports.company_code_get = (req,res) => {
  console.log("get company_code_get controller")
  company_code_Model.company_code_get(req,(err,data) => {
    res.send(data)
  })
}