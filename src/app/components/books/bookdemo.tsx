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
    <div className="grid grid-flow-row grid-cols-3 gap-4">
      <div>
        <SearchBar setChosenBook={setChosenBook} />
      </div>
      <div className="col-span-2">
        <BookGrid setChosenBook={setChosenBook} chosenBook={chosenBook} />
      </div>
    </div>
  );
}

export { type Book };
