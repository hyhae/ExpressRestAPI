const sqlConnection = require("../Utils/ConnectionHandler")


function insertBook(bookName , bookAuthor, bookDescription, publishingDate, numberOfCopies, shelfLocation){
    return new Promise((resolve,reject) => {
        sqlConnection.query("Insert into books (name, author, description, publishing_date, number_copies, shelf_location) values (?,?,?,?,?,?)", 
            [bookName, bookAuthor, bookDescription, publishingDate, numberOfCopies, shelfLocation], (err,results) =>{
            if(err){
                return reject(err);
            }
            return resolve(true);
        })
    })
}

function updateBookCopies(bookName , bookAuthor, newCopiesNumber){
    return new Promise((resolve,reject) => {
        sqlConnection.query("Update books set number_copies = ? where name = ? and author = ?", 
            [newCopiesNumber, bookName, bookAuthor], (err,results) =>{
            if(err){
                return reject(err);
            }
            return resolve(true);
        })
    })
}

function searchBookByNameAndAuthor(bookName , bookAuthor){
    return new Promise((resolve,reject) => {
        sqlConnection.query("select * from books where name = ? and author = ?", [bookName, bookAuthor], (err,results) =>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}

module.exports = {
    insertBook,
    updateBookCopies,
    searchBookByNameAndAuthor
}