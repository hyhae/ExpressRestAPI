const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
const userService = require("../Services/UserService")


router.post("", (req, res) => {
    userService.authenticateAndReturnUser(req.body.username, req.body.password)
        .then((result) => {
            const accessToken = jwt.sign({UID:result[0].UID, username:result[0].username, role:result[0].role}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '40s'})
            res.status(201).json({accessToken:accessToken})
            res.end()
        })
        .catch((err)=>{
            res.status(401).json({err: "Invalid credentials"})
            res.end()
        })
    })

module.exports = router;