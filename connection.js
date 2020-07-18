var mysql = require('mysql')

var con = mysql.createConnection({
    host: 'localhost',
    user: "noobs",
    password: "noobs",
    database: "crud-express"
})

// con.connect(function (err){
//     if(err) throw err;
// });

module.exports = con