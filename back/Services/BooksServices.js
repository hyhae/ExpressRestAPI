var booksServicer = require("../Repository/BooksServicer");

module.exports = {
    insertBook: async (bookName , bookAuthor, bookDescription, publishingDate, numberOfCopies, shelfLocation) => {
        result = await booksServicer.insertBook(bookName , bookAuthor, bookDescription, publishingDate, numberOfCopies, shelfLocation);
        return result
    } ,

    updateBookCopies: async (bookName , bookAuthor, newCopiesNumber) => {
        result = await booksServicer.updateBookCopies(bookName , bookAuthor, newCopiesNumber);
        return result
    } ,

    searchBook: async (bookName , bookAuthor) => {
        result = await booksServicer.searchBookByNameAndAuthor(bookName , bookAuthor);
        return result
    }
}
