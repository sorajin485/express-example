const sql = require("../config/db.js");

const company_code = () => {}

company_code.company_code_Read = (req, result) => {
  sql.query("SELECT * FROM company_code",(err,res) => {
    result(null,res)
  })
}
company_code.company_code_Create = (req,result) =>{
  var values = req.map(d=>{
    return [d.code_value,d.code_id,d.code_name,d.code_description,d.code_option,d.code_sort]
  })
  console.log("values: ",values)
  sql.query("INSERT INTO company_code(code_value,code_id,code_name,code_description,code_option,code_sort) VALUES ?",[values],
  (err,res)=>{
    if(err)
      result({result : "COMPANY-CODE-DB-FAIL"},null)
    else 
      result(null, {result : "COMPANY-CODE-CREATE-OK"})
  })
}
company_code.company_code_Update = (req,result) =>{
  //sql result
}
company_code.company_code_Delete = (req,result) =>{
  //sql result
}


module.exports = company_code