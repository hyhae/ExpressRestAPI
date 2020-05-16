const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
const loginServices = require("../Services/LoginServices")


router.post("", (req, res) => {
    var username = req.body.username
    var password = req.body.password

    if(username && password){
        loginServices.authenticateUser(req.body.username, req.body.password)
        .then((result) => {
            if(result == true){
                const accessToken = jwt.sign(username, process.env.ACCESS_TOKEN_SECRET)
                res.status(201).json({accessToken:accessToken})
                res.end()
            }
            else{
                res.status(401).json("Incorrect username or password.")
                res.end()
            }
        })
        .catch((err)=>{
            res.status(401).json("Please make sure you are sending 2 non empty username and password.")
            console.log(err)
            res.end()
        })
    }
    else{
        res.status(401).json("Invalid credentials.")
        res.end()
    }

})

module.exports = router;