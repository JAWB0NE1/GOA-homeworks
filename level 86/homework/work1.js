class Book {
    constructor(title, author, year, genre, price) {
        this.title = title; 
        this.author = author;
        this.year = year;  
        this.genre = genre; 
        this.price = price; 
    }
}
const myBook = new Book("1984", "George Orwell", 1949, "Dystopian", 15.99);
console.log(myBook);
console.log("Book Title: " + myBook.title);
console.log("Author: " + myBook.author);
console.log("Year of Publication: " + myBook.year);
console.log("Genre: " + myBook.genre);
console.log("Price: " + myBook.price);
console.log("Book Title: " + myBook["title"]);
console.log("Author: " + myBook["author"]);
console.log("Year of Publication: " + myBook["year"]);
console.log("Genre: " + myBook["genre"]);
console.log("Price: " + myBook["price"]);
console.log(`${myBook.title} არის ${myBook.genre} ჟანრის წიგნი, რომლის ავტორია ${myBook.author}. იგი გამოქვეყნდა ${myBook.year}-ში და მისი ფასი არის ${myBook.price}$.`);
