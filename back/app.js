const express = require("express")
const bodyParser = require("body-parser")
const loginRouter = require("./Controller/LoginRoute")

const app = express()
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/auth", loginRouter)
app.listen(3000)
