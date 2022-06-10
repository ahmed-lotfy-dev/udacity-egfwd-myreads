import React from "react";
import { Routes, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

import HomePage from "./views/HomePage";
import SearchPage from "./views/SearchPage";

import "./App.css";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    searchResult: [],
    query: "",
  };
  componentDidMount() {
    BooksAPI.getAll().then(data =>
      this.setState(prevState => {
        return { ...prevState, books: data };
      })
    );
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() =>
      BooksAPI.getAll().then(data =>
        this.setState({
          books: data,
        })
      )
    );
  };

  render() {
    console.log(this.state.searchResult);
    return (
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage books={this.state.books} update={this.updateShelf} />
            }
          ></Route>
          <Route
            path="/search"
            element={
              <SearchPage
                result={this.searchBooks}
                addBook={this.updateShelf}
              />
            }
          ></Route>
        </Routes>
      </div>
    );
  }
}
export default BooksApp;
