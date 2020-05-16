var loginServicer = require("../Repository/LoginServicer");

module.exports = {
    authenticateUser: async (usernameParam, passwordParam) => {
        result = await loginServicer.getCredentials(usernameParam) ;
        return result[0].password === passwordParam
    }
}
