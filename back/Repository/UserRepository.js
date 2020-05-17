const sqlConnection = require("../Utils/ConnectionHandler")


function getUser(username , password){
    return new Promise((resolve,reject) => {
        sqlConnection.query("SELECT * from users where username = ? AND password = ?", [username, password], (err,results) =>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}

module.exports = {
    getUser
}