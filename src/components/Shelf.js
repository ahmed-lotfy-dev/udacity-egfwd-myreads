import React, { Component } from "react";
import Book from "./Book";

export default class Shelf extends Component {
  render() {
    const { shelf, books } = this.props;
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{shelf}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books
                .filter(book => book.shelf === shelf)
                .map(book => (
                  <li key={book.id}>
                    <Book book={book} />
                  </li>
                ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}
