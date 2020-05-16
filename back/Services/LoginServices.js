var loginServicer = require("../Repository/LoginServicer");

module.exports = {

    authenticateUser: function (usernameParam, passwordParam) {

        loginServicer.getCredentials(usernameParam)
        .then( data => {
            console.log(data)
            return passwordParam === data;
        })
    }

}
