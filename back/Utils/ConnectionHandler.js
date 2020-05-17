const mysql = require("mysql")

var mysqlConnection = mysql.createPool({
    connectionLimit: process.env.DB_CONN_LIMIT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
    multipleStatements: true
});

module.exports = mysqlConnection;