const express = require("express")
const router = express.Router()
const util = require("util")
const loginServices = require("../Services/LoginServices")


router.post("", (req, res) => {
    loginServices.authenticateUser(req.body.username, req.body.password)
    .then((result) => {
        console.log(result)
        res.status(201).json(result);
    })
})

module.exports = router;