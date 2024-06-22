import React from "react";
import { Book } from "./bookdemo";
import PagesToHours from "./scripts";

const BookGrid = ({
    chosenBook,
    setChosenBook,
  }: {
    chosenBook?: Book;
    setChosenBook: React.Dispatch<React.SetStateAction<Book | undefined>>;
  }) => {
    return (
      chosenBook && (
        <div className="grid grid-cols-1">
          <div className="stats m-2 bg-base-100 overflow-hidden shadow">
            {/* Book name and author */}
            <div className="stat p-8 max-w-fit text-ellipsis line-clamp-2">
              {chosenBook.authors && (
                <div className="stat-title text-base-content">
                  {chosenBook.authors.slice(0, 4).join(", ")}
                  {chosenBook.authors.length > 4 && (
                    <span> + {chosenBook.authors.length - 4}</span>
                  )}
                </div>
              )}
              <div className="stat-value text-base-content">
                {chosenBook.title}
              </div>
            </div>
          </div>
  
          <div className="grid grid-cols-3">
            <div className="stats m-2 shadow bg-primary/80 overflow-hidden text-primary-content">
              {/* Number of pages */}
              <div className="stat p-8">
                <div className="stat-title text-primary-content">Total Pages</div>
                <div className="stat-value text-primary-content">
                  {chosenBook.pageCount !== 0 ? chosenBook.pageCount : "N/A"}
                </div>
              </div>
            </div>
  
            <div className="stats overflow-hidden m-2 bg-base-200 shadow">
              {/* Hours to read */}
              <div className="stat p-8">
                <div className="stat-title text-secondary">Hours to read</div>
                <div className="stat-value text-secondary">
                  {PagesToHours(chosenBook.pageCount)} h
                </div>
              </div>
            </div>
  
            <div className="stats overflow-hidden m-2 shadow">
              {/* Another book button */}
              <div
                className="btn h-full w-full text-2xl"
                onClick={() => {
                  setChosenBook(undefined);
                }}
              >
                Another book?
              </div>
            </div>
          </div>
        </div>
      )
    );
  };

export default BookGrid;