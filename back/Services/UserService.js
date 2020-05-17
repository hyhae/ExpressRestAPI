var UserRepository = require("../Repository/UserRepository");

module.exports = {
    authenticateAndReturnUser: async (usernameParam, passwordParam) => {
        result = await UserRepository.getUser(usernameParam,passwordParam) ;
        return result
    }
}
