import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

export default function Shelf({ shelf, books, shelfTitle, updateShelf }) {
  Book.propTypes = {
    shelf: PropTypes.string,
    books: PropTypes.array,
    shelfTitle: PropTypes.string,
    updateShelf: PropTypes.func,
  };

  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books
              .filter(book => book.shelf === shelf)
              .map(book => (
                <li key={book.id}>
                  <Book books={books} book={book} updateShelf={updateShelf} />
                </li>
              ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
