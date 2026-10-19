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

// Function to loop through the library array and display each book on the page
function displayBooks() {
    const libraryContainer = document.querySelector("#library-container");
    
    // Clear the container first so we don't duplicate cards when re-rendering
    libraryContainer.innerHTML = "";

    // Loop through each book in the array
    myLibrary.forEach((book) => {
        // Create a card element for the book
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        
        // Store the unique ID on the DOM element for future steps (like deleting/toggling)
        bookCard.dataset.id = book.id;

        // Populate the card content using template literals
        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.num_pages}</p>
            <p><strong>Status:</strong> ${book.read ? "Read ✅" : "Not Read ❌"}</p>
        `;

        // Append the card into our main grid container
        libraryContainer.appendChild(bookCard);
    });
}

// Call the function so our test books render immediately on load
displayBooks();

console.log(myLibrary);