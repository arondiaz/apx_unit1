function printBook(book) {
    console.log("Titulo ".concat(book.title, ", autor ").concat(book.author, ", paginas ").concat(book.page, ", isbn ").concat(book.isbn));
}
var book = {
    title: "Pepe",
    author: "Mark",
    page: 245,
    isbn: "Yes",
};
printBook(book);
