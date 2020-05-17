var bookRepository = require("../Repository/BookRepository");

module.exports = {
    insertBook: async (bookName , bookAuthor, bookDescription, publishingDate, numberOfCopies, shelfLocation) => {
        result = await bookRepository.insertBook(bookName , bookAuthor, bookDescription, publishingDate, numberOfCopies, shelfLocation);
        return result
    } ,

    updateBookCopies: async (bookName , bookAuthor, newCopiesNumber) => {
        result = await bookRepository.updateBookCopies(bookName , bookAuthor, newCopiesNumber);
        return result
    } ,

    searchBook: async (bookName , bookAuthor) => {
        result = await bookRepository.searchBookByNameAndAuthor(bookName , bookAuthor);
        return result
    }
}
