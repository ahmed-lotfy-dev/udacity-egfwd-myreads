import React, { Component } from "react";
import Book from "./Book";

export default class Shelf extends Component {
  render() {
    const { shelf, books, shelfTitle, updateShelf } = this.props;
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
}
