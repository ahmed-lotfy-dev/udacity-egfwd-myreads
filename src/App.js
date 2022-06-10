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

  addBook = bookId => {
    BooksAPI.get(bookId).then(data =>
      this.setState(prevState => {
        return {
          ...prevState,
          books: [data],
        };
      })
    );
  };

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() =>
      BooksAPI.getAll().then(data =>
        this.setState({
          books: data,
        })
      )
    );
  };

  searchBooks = query => {
    BooksAPI.search(query, 20).then(data =>
      this.setState({ searchResult: [...data] })
    );
  };

  clearResult = () => {
    this.setState({ searchResult: [] });
  };

  render() {
    console.log(this.state.searchResult);
    return (
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                books={this.state.books}
                updateShelf={this.updateShelf}
              />
            }
          ></Route>
          <Route
            path="/search"
            element={
              <SearchPage
                clearResult={this.clearResult}
                searchResult={this.state.searchResult}
                result={this.searchBooks}
                addBook={this.addBook}
                updateShelf={this.updateShelf}
              />
            }
          ></Route>
        </Routes>
      </div>
    );
  }
}
export default BooksApp;
