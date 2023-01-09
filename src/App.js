import React from "react";
import Navbar from "./components/Navbar"
import Booklist from "./components/Booklist"
import AddBook from "./components/AddBook";
import 'bootstrap/dist/css/bootstrap.min.css'
import { BookContextProvider } from "./Context/BookContext";

function App() {




  return (
    <BookContextProvider>
      <div className="App">
        <Navbar />
        <AddBook />
        <Booklist />
      </div>
    </BookContextProvider>
  );
}

export default App;