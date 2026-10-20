# My Library

A feature-rich, interactive web application for tracking your personal book collection, built as part of **The Odin Project** curriculum. This project demonstrates object-oriented programming concepts in JavaScript, native HTML dialog modals, dynamic DOM re-rendering, and robust state management.

## Features

- **ES6 `Book` Class**: Uses a JavaScript `class` with a constructor and instance methods, and generates a unique stable identifier (`crypto.randomUUID()`) for every book.
- **Interactive Modal Form**: Clean, modern HTML5 `<dialog>` modal for capturing new book details (Title, Author, Page Count, and Read Status) with instant form resetting.
- **Dynamic Grid Display**: Automatically loops through the library array to render responsive book cards on the fly without page reloads.
- **Read Status Toggling**: Flip a book's reading badge between "Read ✅" and "Not Read ❌" with a single click, handled by the `Book` class's own `toggleRead()` method.
- **Delete Management**: Remove any book from your collection instantly by its unique identifier.
- **Safe Rendering**: Book details are inserted with `textContent` rather than `innerHTML`, so user input is never parsed as HTML.

## Built With

- **HTML5**: Semantic elements and native dialog modals.
- **CSS3 / CSS Grid**: Responsive card layout grid and clean custom styling.
- **Vanilla JavaScript**: ES6 classes, array methods (`forEach`, `findIndex`, `splice`), and event handling.
- **Git & Version Control**: Feature-branch workflow with structured milestone tracking.