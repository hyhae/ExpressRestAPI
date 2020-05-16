const mysql = require("mysql")


var mysqlConnection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "khazna",
    multipleStatements: true
});

mysqlConnection.connect((err)=>{
    if(!err){
        console.log("Connection succeeded");
    }
    else{
        console.log(err.stack);
        console.log("Connection failed");
    }
});

module.exports = mysqlConnection;