import React from "react";
import BookSearch from "../booksearch";

const Hero = () => {
  return (
    <div className="flex flex-row text-left max-w-screen-xl">
      <h1 className="text-7xl font-black mb-4 w-1/2">
        Get a clear view of your book <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">reading</span> goals
      </h1>
      <div className="flex flex-col w-1/2">

        <div>
          
        </div>

        <div className="items-center justify-center mx-auto my-12">
          <div className="stats bg-secondary text-secondary-content mx-auto p-4">
            <BookSearch />
          </div>
        </div>

        <div className="stats bg-primary text-primary-content mx-auto my-2">
          <div className="stat">
            <div className="stat-title text-primary-content">Example Stat</div>
            <div className="stat-value">Read more books!</div>
          </div>
        </div>

        {/* <div>
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <ul className="list-disc list-inside">
            <li>Track your reading progress</li>
            <li>Set reading goals</li>
            <li>Find new books to read</li>
          </ul>
        </div> */}

      </div>
    </div>
  );
};

export default Hero;
