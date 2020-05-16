const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
const bookServices = require("../Services/BooksServices")
const authentication = require("../Services/AuthenticationService")

router.get("/search", authentication.authenticateToken, (req, res) => {
    bookServices.searchBook(req.body.book, req.body.author)
    .then((result) => {
        res.status(201).json(result)
        res.end()
    })
    .catch((err)=>{
        res.status(401).json({err: "Error occured. Reason: Duplicate or Missing data"})
        res.end()
    })
})

router.post("/insert", authentication.authenticateAdmin , (req,res)=>{
    bookServices.insertBook(req.body.book, req.body.author, req.body.description, req.body.publishing_date, req.body.number_of_copies, req.body.shelf_location)
    .then((result) => {
        res.status(201).json({message:"Book Inserted successfully!"})
        res.end()
    })
    .catch((err)=>{
        res.status(401).json({err: "Error occured. Reason: Duplicate or Missing data"})
        res.end()
    })
})

router.put("/update", authentication.authenticateAdmin , (req,res)=>{
    bookServices.updateBookCopies(req.body.book, req.body.author, req.body.number_of_copies)
    .then((result) => {
        res.status(201).json({message:"Book updated successfully!"})
        res.end()
    })
    .catch((err)=>{
        res.status(401).json({err: "Error occured. Reason: Book not found. ? ", err})
        res.end()
    })
})

module.exports = router;