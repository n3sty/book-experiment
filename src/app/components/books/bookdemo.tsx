"use client";

import React, { useState, useEffect } from "react";
import PagesToHours from "./scripts";
import { redirect } from "next/navigation";

interface Book {
  id: string;
  title: string;
  authors: string[];
  pageCount: number;
}

const SearchBar = ({
  setChosenBook,
}: {
  setChosenBook: React.Dispatch<React.SetStateAction<Book | undefined>>;
}) => {
  const [query, setQuery] = useState<string>("");
  const [books, setBooks] = useState<Book[]>([]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [showSearchBar, setShowSearchBar] = useState<boolean>(true);

  const lang = "en";

  useEffect(() => {
    if (query.length > 3 && showSearchBar) {
      fetchBooks(query);
      setShowDropdown(true);
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
    setBooks(books.slice(0, 5));
  };

  const handleSelectBook = (book: Book) => {
    setQuery("");
    setShowDropdown(false);
    setShowSearchBar(false);
    setChosenBook(book);
  };

  return (
    showSearchBar && (
      <div className="relative py-4 px-2 w-full max-w-md md:max-w-xl overflow-x-hidden">
        <input
          type="text"
          className="input input-primary input-lg text-ellipsis w-full"
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
                  <div className="stat-value text-ellipsis line-clamp-1 text-xl">
                    {book.title}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  );
};

const BookGrid = ({ chosenBook }: { chosenBook?: Book }) => {
  return (
    chosenBook && (
      <div className="grid grid-cols-1">
        <div className="stats m-2 bg-base-200 overflow-hidden shadow">
          {/* Book name and author */}
          <div className="stat p-8 max-w-fit text-ellipsis line-clamp-2">
            <div className="stat-title text-base-content">
              {chosenBook.authors !== null ? chosenBook.authors : "N/A"}
            </div>
            <div className="stat-value text-base-content">
              {chosenBook.title}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3">
          <div className="stats m-2 shadow bg-primary text-primary-content">
            {/* Number of pages */}
            <div className="stat p-8">
              <div className="stat-title text-primary-content">Total Pages</div>
              <div className="stat-value text-primary-content">
                {chosenBook.pageCount !== 0 ? chosenBook.pageCount : "N/A"}
              </div>
            </div>
          </div>

          <div className="stats overflow-hidden m-2 bg-base-200 shadow">
            <div className="stat p-8">
              <div className="stat-title text-secondary">Hours to read</div>
              <div className="stat-value text-secondary">
                {PagesToHours(chosenBook.pageCount)} h
              </div>
            </div>
          </div>

          <div className="stats m-2 shadow">
            <div className="btn h-full w-full text-2xl">Another book?</div>
          </div>
        </div>
      </div>
    )
  );
};

export default function BookDemo() {
  const [chosenBook, setChosenBook] = useState<Book | undefined>(undefined);

  return (
    <div className="m-2">
      <BookGrid chosenBook={chosenBook} />
      <SearchBar setChosenBook={setChosenBook} />
    </div>
  );
}
