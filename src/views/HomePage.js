import React, { Component } from "react";
import { Link } from "react-router-dom";
import Shelf from "../components/Shelf";

export default class HomePage extends Component {
  render() {
    const { books, updateShelf } = this.props;
    return (
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <Shelf
                books={books}
                updateShelf={updateShelf}
                shelf="currentlyReading"
                shelfTitle="Currently Reading"
              />
              <Shelf
                books={books}
                updateShelf={updateShelf}
                shelf="wantToRead"
                shelfTitle="Want To Read"
              />
              <Shelf
                books={books}
                updateShelf={updateShelf}
                shelf="read"
                shelfTitle="Read"
              />
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
      </div>
    );
  }
}
