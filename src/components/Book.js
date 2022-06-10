import React from "react";
import PropTypes from "prop-types";

export default function Book({ book, updateShelf }) {
  const changeSelectHandler = e => {
    updateShelf(book, e.target.value);
  };

  const backgroundImg = book.imageLinks
    ? book.imageLinks.thumbnail
    : "http://via.placeholder.com/128x192?text=?";

  Book.propTypes = {
    book: PropTypes.object,
    updateShelf: PropTypes.func,
  };

  return (
    <div>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${backgroundImg})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select defaultValue={book.shelf} onChange={changeSelectHandler}>
              <option value="move">Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    </div>
  );
}
