const express = require("express")
const router = express.Router()
const util = require("util")
const loginServices = require("../Services/LoginServices")


router.post("", (req, res) => {
    var handleRequest = util.promisify(loginServices.authenticateUser)
    handleRequest(req.body.username,req.body.password)
    .then(result => {
        console.log(resolve(result))
    });
    //authenticated =  loginServices.authenticateUser(req.body.username, req.body.password);
    //res.status(201).json(authenticated);
    //res.send(authenticated)
})

module.exports = router;