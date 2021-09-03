const sql = require("../config/db.js");

const company_code = () => { }

company_code.company_code_Read = (req, result) => {
  sql.query("SELECT * FROM company_code", (err, res) => {
    result(null, res)
  })
}
company_code.company_code_Create = (req, result) => {
  var values = req.map(d => {
    return [d.code_value, d.code_id, d.code_name, d.code_description, d.code_option, d.code_sort]
  })
  console.log("values: ", values)
  sql.query("INSERT INTO company_code(code_value,code_id,code_name,code_description,code_option,code_sort) VALUES ?", [values],
    (err, res) => {
      if (err)
        result({ result: "COMPANY-CODE-DB-FAIL" }, null)
      else
        result(null, { result: "COMPANY-CODE-CREATE-OK" })
    })
}
company_code.company_code_Update = (req, result) => {
  console.log("code_name : ", req.code_name)
  console.log("code_description : ", req.code_description)
  console.log("code_sort : ", req.code_sort)
  console.log("code_value : ", req.code_value)
  sql.query("UPDATE company_code SET code_name=?,code_description=?,code_sort=? WHERE code_value=?",
    [req.code_name, req.code_description, req.code_sort, req.code_value],
    (err, res) => {
      if (err)
        result({ result: "COMPANY-CODE-UPDATE-DB-FAIL" }, null)
      else if (res.affectedRows === 0)
        result({ result: "COMPANY-CODE-UPDATE-DB-NOT-FOUND" }, null)
      else
        result(null, { result: "COMPANY-CODE-UPDATE-OK" })
    })
}
company_code.company_code_Delete = (req, result) => {
  console.log("delete req : ", req)
  sql.query("DELETE FROM company_code WHERE code_value in (?)", [req], (err, res) => {
    if (err)
      result({ result: "COMPANY-CODE-DELETE-DB-FAIL" },null)
    else if (res.affectedRows === 0)
      result({result: "COMPANY-CODE-DELETE-DB-NOT-FOUND"},null)
    else
      result(null,{result : "COMPANY-CODE-OK"})
  })
}


module.exports = company_code