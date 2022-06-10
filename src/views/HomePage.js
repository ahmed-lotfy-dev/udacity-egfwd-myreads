import React, { Component } from "react";
import { Link } from "react-router-dom";
import Shelf from "../components/Shelf";

export default class HomePage extends Component {
  render() {
    const { books } = this.props;
    return (
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <Shelf books={books} shelf="currentlyReading" />
              <Shelf books={books} shelf="wantToRead" />
              <Shelf books={books} shelf="read" />
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
