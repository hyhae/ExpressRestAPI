const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
const authentication = require("../Services/AuthenticationService")

router.get("/search", authentication.authenticateToken, (req, res) => {
    res.send("Authentication Successful")
})

module.exports = router;