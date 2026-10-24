// 1. Array to store all of your book objects
const myLibrary = [];

// 2. Book class (replaces the constructor function)
class Book {
    constructor(title, author, numPages, read) {
        this.id = crypto.randomUUID(); // Unique stable identifier
        this.title = title;
        this.author = author;
        this.numPages = numPages;
        this.read = read;
    }

    // Behavior now lives on the class, right next to the data it changes
    toggleRead() {
        this.read = !this.read;
    }
}

// 3. Create a book and push it to the array
function addBookToLibrary(title, author, numPages, read) {
    const newBook = new Book(title, author, numPages, read);
    myLibrary.push(newBook);
}

// Example usage (read is a real boolean now; the string "not read yet"
// was truthy, so The Hobbit used to show up as "Read")
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("1984", "George Orwell", 328, true);

// Helper: build a <p> with a bold label and a plain-text value
function createInfoLine(label, value, className) {
    const p = document.createElement("p");
    if (className) p.classList.add(className);
    const strong = document.createElement("strong");
    strong.textContent = `${label}: `;
    p.append(strong, value);
    return p;
}

// Loop through the library array and display each book on the page
function displayBooks() {
    const libraryContainer = document.querySelector("#library-container");
    libraryContainer.innerHTML = "";

    myLibrary.forEach((book) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        bookCard.dataset.id = book.id;

        // textContent (instead of innerHTML) keeps user input from being parsed as HTML
        const title = document.createElement("h3");
        title.textContent = book.title;

        const toggleReadBtn = document.createElement("button");
        toggleReadBtn.classList.add("toggle-read-btn", "btn");
        toggleReadBtn.textContent = "Toggle Read";
        toggleReadBtn.addEventListener("click", () => {
            book.toggleRead(); // class method
            displayBooks();
        });

        const removeBtn = document.createElement("button");
        removeBtn.classList.add("remove-btn", "btn", "secondary-btn");
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", () => {
            removeBookFromLibrary(book.id);
        });

        bookCard.append(
            title,
            createInfoLine("Author", book.author),
            createInfoLine("Pages", book.numPages),
            createInfoLine("Status", book.read ? "Read ✅" : "Not Read ❌", "read-status"),
            toggleReadBtn,
            removeBtn
        );

        libraryContainer.appendChild(bookCard);
    });
}

// Remove a book from the array by its ID and re-render
function removeBookFromLibrary(bookId) {
    const bookIndex = myLibrary.findIndex((book) => book.id === bookId);

    if (bookIndex !== -1) {
        myLibrary.splice(bookIndex, 1);
        displayBooks();
    }
}

displayBooks();

// --- Modal & Form Event Handling ---
const dialog = document.querySelector("#book-dialog");
const newBookBtn = document.querySelector("#new-book-btn");
const cancelBtn = document.querySelector("#cancel-btn");
const bookForm = document.querySelector("#book-form");

newBookBtn.addEventListener("click", () => {
    dialog.showModal();
});

cancelBtn.addEventListener("click", () => {
    dialog.close();
    bookForm.reset();
});

bookForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const numPages = Number(document.querySelector("#num_pages").value);
    const read = document.querySelector("#read").checked;

    addBookToLibrary(title, author, numPages, read);
    displayBooks();

    bookForm.reset();
    dialog.close();
});

// --- Form Validation ---
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const numPagesInput = document.querySelector("#num_pages");

// Custom validation messages using Constraint Validation API
titleInput.addEventListener("input", () => {
    if (titleInput.validity.valueMissing) {
        titleInput.setCustomValidity("The book title must be filled!");
    } else {
        titleInput.setCustomValidity("");
    }
});

authorInput.addEventListener("input", () => {
    if (authorInput.validity.valueMissing) {
        authorInput.setCustomValidity("The author name must be filled!");
    } else {
        authorInput.setCustomValidity("");
    }
});

numPagesInput.addEventListener("input", () => {
    if (numPagesInput.validity.valueMissing) {
        numPagesInput.setCustomValidity("The number of pages must be filled!");
    } else if (numPagesInput.validity.rangeUnderflow) {
        numPagesInput.setCustomValidity("The book must have at least 1 page!");
    } else {
        numPagesInput.setCustomValidity("");
    }
});