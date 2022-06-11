import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

import HomePage from "./views/HomePage";
import SearchPage from "./views/SearchPage";

import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then(data => setBooks([...data]));
  }, []);

  const addBook = bookId => {
    BooksAPI.get(bookId).then(data => setSearchResult([...data]));
  };

  const updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() =>
      BooksAPI.getAll().then(data => setBooks([...data]))
    );
  };

  function searchBooks(query) {
    BooksAPI.search(query).then(data => setSearchResult([...data]));
  }

  const clearResult = () => {
    setSearchResult([]);
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={<HomePage books={books} updateShelf={updateShelf} />}
        ></Route>
        <Route
          path="/search"
          element={
            <SearchPage
              books={books}
              clearResult={clearResult}
              searchResult={searchResult}
              result={searchBooks}
              addBook={addBook}
              updateShelf={updateShelf}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
