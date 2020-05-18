const sqlConnection = require("../Utils/ConnectionHandler")

function insertRefreshToken(user_id , token){
    return new Promise((resolve,reject) => {
        sqlConnection.query("Insert into refresh_tokens (user_id, token) values (?,?)", 
            [user_id , token], (err,results) =>{
            if(err){
                return reject(err);
            }
            return resolve(true);
        })
    })
}

function getRefreshToken(user_id){
    return new Promise((resolve,reject) => {
        sqlConnection.query("select token from refresh_tokens where user_id =?", 
            [user_id], (err,results) =>{
            if(err){
                return reject(false);
            }
            return resolve(results);
        })
    })
}

function deleteRefreshToken(user_id){
    return new Promise((resolve,reject) => {
        sqlConnection.query("delete from refresh_tokens where user_id=?", 
            [user_id], (err,results) =>{
            if(err){
                return reject(err);
            }
            return resolve(true);
        })
    })
}

module.exports = {
    insertRefreshToken,
    getRefreshToken,
    deleteRefreshToken
}