require('dotenv').config()
const express = require("express")
const bodyParser = require("body-parser")
const loginRouter = require("./Controller/LoginRoute")

const app = express()
app.use(bodyParser.json())
app.use("/api/auth", loginRouter)
app.listen(process.env.APP_PORT)
