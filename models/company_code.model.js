const sql = require("../config/db.js");

const company_code = () =>{

}

company_code.company_code_get = (req, result) => {
  sql.query("SELECT * FROM company_code",(err,res) => {
    result(null,res)
  })
}

module.exports = company_code