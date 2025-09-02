import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [books, setBooks] = useState([]);
  const [searchedbook, setSearchedBook] = useState([]);
  const [term, setTerm] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchBooks() {
      setLoading(true);
      try {
        const res = await fetch("/api/books");
        const data = await res.json();
        setBooks(data);
      } catch (error) {
        console.log("Error fetching books:", error);
        return [];
      } finally {
        setLoading(false);
      }
    }
    fetchBooks();
  }, []);
  useEffect(() => {
    if (!term.trim()) {
      return;
    }
    async function fetchBookByName() {
      setLoading(true);
      try {
        const res = await fetch(`/api/books/${term}`);
        const searcheddata = await res.json();
        setSearchedBook(searcheddata);
      } catch (error) {
        console.log("Error fetching seached books:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchBookByName();
  }, [term]);

  return (
    <GlobalContext.Provider value={{ books, searchedbook, setTerm, loading }}>
      {children}
    </GlobalContext.Provider>
  );
}
