interface Book {
  title: string;
  author: string;
  page: number;
  isbn: string;
}

function printBook(book: Book) {
  console.log(
    `Titulo ${book.title}, autor ${book.author}, paginas ${book.page}, isbn ${book.isbn}`
  );
}

const book: Book = {
  title: "Pepe",
  author: "Mark",
  page: 245,
  isbn: "Yes",
};

printBook(book);
