const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
const userService = require("../Services/UserService")
const authService = require("../Services/AuthenticationService")


router.post("", (req, res) => {
    userService.authenticateAndReturnUser(req.body.username, req.body.password)
        .then((result) => {
            var accessToken = jwt.sign({UID:result[0].UID, username:result[0].username, role:result[0].role}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15s'})
            var refreshToken = jwt.sign({UID:result[0].UID, username:result[0].username, role:result[0].role}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '30s'})
            
            authService.updateRefreshToken(result[0].UID, refreshToken)
            .catch((err)=>{
                console.log("failed to insert." + err)
            })

            res.status(201).json({accessToken:accessToken})
            res.end()
        })
        .catch((err)=>{
            res.status(401).json({err: "Invalid credentials"})
            res.end()
        })
    })

module.exports = router;