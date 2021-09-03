const company_code_Model = require("../models/company_code.model.js");

exports.company_code_Read = (req,res) => {
  console.log("get company_code_Read controller")
  company_code_Model.company_code_Read(req,(err,data) => {
    res.send(data)
  })
}
exports.company_code_Create = (req,res) =>{
  company_code_Model.company_code_Create(req.body["company-code-create"],(err,data)=>{
    var res_body = new Object()
    res_body["company-code-create-resp"] = new Object()
    if(err){
      res_body["company-code-create-resp"]["result"]=err.result
      res.status(500).send(res_body)
    }else{
      res_body["company-code-create-resp"]["result"]=data.result
      res.send(res_body)
    }
  })
}
exports.company_code_Update = (req,res) =>{
  console.log("patch company_code_Update controller")
  company_code_Model.company_code_Update(req.body["company-code-update"],(err,data)=>{
    var res_body = new Object()
    res_body["company-code-update-resp"] = new Object()
    if(err){
      res_body["company-code-update-resp"]["result"]=err.result
      res.status(500).send(res_body)
    }else{
      res_body["company-code-update-resp"]["result"]=data.result
      res.send(res_body)
    }
  })
}

exports.company_code_Delete = (req,res) =>{
  console.log("delete company_code_Delete controller : ",req.body)
  company_code_Model.company_code_Delete(req.body["company-code-delete"],(err,data)=>{
    var res_body = new Object()
    res_body["company-code-delete-resp"] = new Object()
    if(err){
      res_body["company-code-delete-resp"]["result"]=err.result
      res.status(500).send(res_body)
    }else{
      res_body["company-code-delete-resp"]["result"]=data.result
      res.send(res_body)
    }
  })
}