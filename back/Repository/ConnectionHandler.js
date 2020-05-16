const mysql = require("mysql")

var mysqlConnection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
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