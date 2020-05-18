const jwt = require("jsonwebtoken")
var auhenticationRepository = require("../Repository/AuthenticationRepository");

async function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    const tokenData = jwt.decode(token, process.env.ACCESS_TOKEN_SECRET)
    var refreshToken = await getRefreshToken(tokenData.UID);

    if (token == null) {
        return res.sendStatus(401)
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, data) => {
        if (err && refreshToken && err.name == 'TokenExpiredError') {
            jwt.verify(refreshToken[0].token, process.env.REFRESH_TOKEN_SECRET, async (err, data) => {
                if (err) {
                    console.log('GTFO1')
                    return res.sendStatus(401)
                }
                console.log("generating new access token.")
                return
            })
        }
        else if (err) {
            console.log('GTFO2')
            return res.sendStatus(403)
        }
        req.data = data
        next()
    })

}

function authenticateAdmin(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) {
        return res.sendStatus(401)
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
        if (err || data.role != "admin") {
            return res.sendStatus(403)
        }
        req.data = data
        next()
    })
}

async function updateRefreshToken(user_id, token) {
    var repoToken = await getRefreshToken(user_id);

    if (repoToken == undefined) {
        await auhenticationRepository.insertRefreshToken(user_id, token);
    }

    jwt.verify(repoToken[0].token, process.env.REFRESH_TOKEN_SECRET, async (err, data) => {
        if (err && err.name == 'TokenExpiredError') {
            await deleteToken(user_id)
            await auhenticationRepository.insertRefreshToken(user_id, token);
        }
    })
}

async function getRefreshToken(user_id) {
    result = await auhenticationRepository.getRefreshToken(user_id);
    return result
}

async function deleteToken(user_id) {
    result = await auhenticationRepository.deleteRefreshToken(user_id);
    return result
}

module.exports = {
    authenticateToken,
    authenticateAdmin,
    updateRefreshToken,
    getRefreshToken,
    deleteToken
}