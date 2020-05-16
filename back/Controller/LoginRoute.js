const express = require("express")
const router = express.Router()
const util = require("util")
const loginServices = require("../Services/LoginServices")


router.post("", (req, res) => {
    var username = req.body.username
    var password = req.body.password

    if(username && password){
        loginServices.authenticateUser(req.body.username, req.body.password)
        .then((result) => {
            console.log(result)
            res.status(201).json(result)
            res.end()
        })
        .catch((err)=>{
            res.status(401).json("Incorrect username or password.")
            res.end()
        })
    }
    else{
        res.status(401).json("Missing credentials.")
        res.end()
    }

})

module.exports = router;