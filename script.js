// Write a constructor for making “Book” objects. 
// We will revisit this in the next project. 
// Your book objects should have the book’s title, author, the number of pages, 
// and whether or not you have read the book.

// 1. Array to store all of your book objects
const myLibrary = [];

// 2. Book constructor with unique ID support
function Book(title, author, num_pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.id = crypto.randomUUID(); // Unique stable identifier
    this.title = title;
    this.author = author;
    this.num_pages = num_pages;
    this.read = read;
}

// 3. Function to take arguments, create a book, and push it to the array
function addBookToLibrary(title, author, num_pages, read) {
    const newBook = new Book(title, author, num_pages, read);
    myLibrary.push(newBook);
}

// Example usage:
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
addBookToLibrary("1984", "George Orwell", 328, "read");

console.log(myLibrary);