var loginServicer = require("../Repository/UserServicer");

module.exports = {
    authenticateAndReturnUser: async (usernameParam, passwordParam) => {
        result = await loginServicer.getUser(usernameParam,passwordParam) ;
        return result
    }
}
