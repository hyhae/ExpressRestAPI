const sqlConnection = require("./ConnectionHandler")


function getCredentials (username){
    return new Promise((resolve,reject) => {
        sqlConnection.query("SELECT password from users where username = ?", username, (err,results) =>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}

module.exports = {
getCredentials
}