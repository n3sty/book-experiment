"use client";

import React, { useState, useEffect } from "react";

interface Book {
  id: string;
  title: string;
  authors: string[];
  pageCount: number;
}

const BookSearch: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [books, setBooks] = useState<Book[]>([]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const lang = 'en'

  useEffect(() => {
    if (query.length > 3) {
      fetchBooks(query);
    } else {
      setBooks([]);
      setShowDropdown(false);
    }
  }, [query]);

  const fetchBooks = async (query: string) => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&langRestrict=${lang}&orderBy=relevance`
    );
    const data = await response.json();
    const books: Book[] = data.items.map((item: any) => ({
      id: item.id,
      title: item.volumeInfo.title,
      authors: item.volumeInfo.authors,
      pageCount: item.volumeInfo.pageCount || "N/A",
    }));
    setBooks(books.slice(0, 4));
    setShowDropdown(true);
  };

  const handleSelectBook = (book: Book) => {
    setQuery(book.title);
    alert(`Number of pages: ${book.pageCount}`);
    setShowDropdown(false);
    query.replace(book.title, "");
  };

  return (
    <div className="relative break-words max-w-md md:max-w-xl overflow-x-hidden text-base-content">
      <input
        type="text"
        className="input input-primary text-ellipsis text-base-content w-full"
        placeholder="Enter book title"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div>
        {showDropdown && (
          <div className="stats transition-all stats-vertical overflow-hidden shadow-lg z-10 bg-primary text-primary-content mx-auto my-2 w-full">
            {books.map((book) => (
              <div
                key={book.id}
                onClick={() => handleSelectBook(book)}
                className="stat cursor-pointer hover:bg-gray-200"
              >
                <div className="stat-title text-ellipsis line-clamp-1 text-primary-content">
                  {book.authors}
                </div>
                <div className="stat-value text-xl">
                  {book.title}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookSearch;
