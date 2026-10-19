# My Library

A feature-rich, interactive web application for tracking your personal book collection, built as part of **The Odin Project** curriculum. This project demonstrates object-oriented programming concepts in JavaScript, native HTML dialog modals, dynamic DOM re-rendering, and robust state management.

## Features

- **Book Constructor & Validation**: Utilizes a robust JavaScript constructor function complete with `new.target` checks to ensure safety, and generates unique stable identifiers (`crypto.randomUUID()`) for every book.
- **Interactive Modal Form**: Clean, modern HTML5 `<dialog>` modal for capturing new book details (Title, Author, Page Count, and Read Status) with instant form resetting.
- **Dynamic Grid Display**: Automatically loops through the library array to render responsive book cards on the fly without page reloads.
- **Read Status Toggling**: Easily flip a book's reading badge between "Read ✅" and "Not Read ❌" with a single click.
- **Delete Management**: Remove any book from your collection instantly by its unique identifier.

## Built With

- **HTML5**: Semantic elements and native dialog modals.
- **CSS3 / CSS Grid**: Responsive card layout grid and clean custom styling.
- **Vanilla JavaScript**: Constructor functions, array methods (`forEach`, `findIndex`, `find`), and event handling.
- **Git & Version Control**: Structured milestone tracking.