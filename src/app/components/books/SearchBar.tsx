import React, { useEffect, useState } from "react";
import { type Book } from "@/app/components/books/bookdemo";

const SearchBar = ({
  setChosenBook,
}: {
  setChosenBook: React.Dispatch<React.SetStateAction<Book | undefined>>;
}) => {
  const [query, setQuery] = useState<string>("");
  const [books, setBooks] = useState<Book[]>([]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const lang = "en";

  useEffect(() => {
    if (query.length > 3) {
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
    setChosenBook(book);
  };

  return (
    <div className="grid p-2 my-2 overflow-hidden">
      <input
        type="text"
        className="input input-primary input-lg text-ellipsis w-full"
        placeholder="Enter book title"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div>
        {showDropdown && (
          <div className="stats stats-vertical overflow-hidden shadow-lg z-10 bg-primary/80 text-primary-content w-full">
            {books.map((book) => (
              <div
                key={book.id}
                onClick={() => handleSelectBook(book)}
                className="stat cursor-pointer transition hover:text-secondary-content p-4 text-ellipsis line-clamp-2"
              >
                {book.authors && (
                  <div className="stat-title text-sm text-ellipsis line-clamp-1 text-primary-content">
                    {book.authors.slice(0, 2).join(", ")}
                    {book.authors.length > 2 && (
                      <span> + {book.authors.length - 2}</span>
                    )}
                  </div>
                )}
                <div className="stat-value text-ellipsis line-clamp-1 text-lg">
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

export default SearchBar;
