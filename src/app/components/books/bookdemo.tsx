"use client";

import React, { useState } from "react";
import SearchBar from "./SearchBar";
import BookGrid from "./BookGrid";

interface Book {
  id: string;
  title: string;
  authors: string[];
  pageCount: number;
}

export default function BookDemo() {
  const [chosenBook, setChosenBook] = useState<Book | undefined>(undefined);

  return (
    <div className="grid lg:grid-cols-2 mx-auto">
      <SearchBar
        setChosenBook={setChosenBook}
      />
      <BookGrid
        setChosenBook={setChosenBook}
        chosenBook={chosenBook}
      />
    </div>
  );
}

export { type Book };
