const sql = require("../config/db.js");

const commoncode = () =>{

}

commoncode.commoncode_get = (req, result) => {
  sql.query("SELECT * FROM commoncode",(err,res) => {
    result(null,res)
  })
}

module.exports = commoncode