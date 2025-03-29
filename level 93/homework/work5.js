let library = [
    { title: "Book A", author: "Author A", copies: 3 },
    { title: "Book B", author: "Author B", copies: 5 },
    { title: "Book C", author: "Author C", copies: 2 }
  ];
  function addBook(book) {
    library.push(book);
    return library; 
  }
  function removeLastBook() {
    library.pop();
    return library;
  }
  function updateBookCopies(title, copies) {
    for (let i = 0; i < library.length; i++) {
      if (library[i].title === title) {
        library.splice(i, 1, { ...library[i], copies }); 
        break;
      }
    }
    return library; 
  }
  function listBooks() {
    let bookTitles = library.map(book => book.title).join(", "); 
    return bookTitles;
  }
  function extractBooks(start, end) {
    let extractedBooks = library.slice(start, end); 
    return extractedBooks;
  }
  function modifyBooks() {
    library.copyWithin(library.length - 1, 0, 1); 
    return library;
  }
  function resetCopies(newCopies) {
    library = library.map(book => ({ ...book, copies: newCopies }));
    return library;
  }
  function removeFirstBook() {
    library.shift(); 
    return library; 
  }
  function addFirstBook(book) {
    library.unshift(book); 
    return library;
  }
  console.log("Initial library:", library);
  
  console.log("Add a book:", addBook({ title: "Book D", author: "Author D", copies: 4 }));
  console.log("Remove the last book:", removeLastBook());
  console.log("Update book copies:", updateBookCopies("Book B", 10));
  console.log("List books:", listBooks());
  console.log("Extract books:", extractBooks(0, 2));
  console.log("Modify books:", modifyBooks());
  console.log("Reset copies:", resetCopies(5));
  console.log("Remove the first book:", removeFirstBook());
  console.log("Add a first book:", addFirstBook({ title: "Book E", author: "Author E", copies: 6 }));