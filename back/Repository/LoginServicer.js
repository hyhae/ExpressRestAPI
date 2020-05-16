const sqlConnection = require("./ConnectionHandler")


module.exports = {

    getCredentials : function (username){
        return new Promise((resolve,reject) => {
            sqlConnection.query("SELECT password from users where username = 'hyhae'", username, (err,results) =>{
                if(err){
                    return reject(err);
                }
                else{
                    return resolve(results[0].passsword);
                }
            })
        })
    }

}