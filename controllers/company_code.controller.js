const company_code_Model = require("../models/company_code.model.js");

exports.company_code_Read = (req,res) => {
  console.log("get company_code_Read controller")
  company_code_Model.company_code_Read(req,(err,data) => {
    res.send(data)
  })
}
exports.company_code_Create = (req,res) =>{
  company_code_Model.company_code_Create(req.body["company-code"],(err,data)=>{
    var res_body = new Object()
    res_body["company-code-resp"] = new Object()
    if(err){
      res_body["company-code-resp"]["result"]=err.result
      res.status(500).send(res_body)
    }else{
      res_body["company-code-resp"]["result"]=data.result
      res.send(res_body)
    }
  })
}
exports.company_code_Update = (req,res) =>{
  console.log("post company_code_Create controller")
  company_code_Model.company_code_Update(req,(err,data)=>{
    res.send(data)
  })
}
exports.company_code_Delete = (req,res) =>{
  console.log("post company_code_Create controller")
  company_code_Model.company_code_Delete(req,(err,data)=>[
    res.send(data)
  ])
}