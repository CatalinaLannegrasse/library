# My Library

A feature-rich, interactive web application for tracking your personal book collection, built as part of **The Odin Project** curriculum. This project demonstrates object-oriented programming concepts in JavaScript, native HTML dialog modals, dynamic DOM re-rendering, and robust state management.

## Features

- **ES6 `Book` Class**: Uses a JavaScript `class` with a constructor and instance methods, and generates a unique stable identifier (`crypto.randomUUID()`) for every book.
- **Interactive Modal Form**: Clean, modern HTML5 `<dialog>` modal for capturing new book details (Title, Author, Page Count, and Read Status) with instant form resetting.
- **Custom Form Validation**: Leverages the HTML5 Constraint Validation API to show tailored error messages (e.g., "The author name must be filled!") with immediate user feedback and invalid field styling.
- **Local Storage Persistence**: Automatically saves the library state to `localStorage` whenever books are added, removed, or toggled, and re-instantiates raw data back into proper `Book` class instances upon page reload.
- **Dynamic Grid Display**: Automatically loops through the library array to render responsive book cards on the fly without page reloads.
- **Read Status Toggling**: Flip a book's reading badge between "Read ✅" and "Not Read ❌" with a single click, handled by the `Book` class's own `toggleRead()` method.
- **Delete Management**: Remove any book from your collection instantly by its unique identifier.
- **Safe Rendering**: Book details are inserted with `textContent` rather than `innerHTML`, so user input is never parsed as HTML.

## Built With

- **HTML5**: Semantic elements, form validation attributes, and native dialog modals.
- **CSS3 / CSS Grid**: Responsive card layout grid, invalid field styling, and clean custom styling.
- **Vanilla JavaScript**: ES6 classes, array methods (`forEach`, `findIndex`, `splice`, `map`), Constraint Validation API, `localStorage` API, and event handling.
- **Git & Version Control**: Feature-branch workflow with structured milestone tracking.