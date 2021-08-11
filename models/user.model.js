const sql = require("../config/db.js");

const user = () =>{

}

user.users = (req, result) => {
  sql.query("SELECT * FROM users",(err,res) => {
    result(null,res)
  })
}

module.exports = user