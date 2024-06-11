import React from "react";
import BookSearch from "../booksearch";

const Hero = () => {
  return (
    <div className="flex md:flex-row flex-col text-left max-w-screen-xl">
      <h1 className="md:text-7xl text-5xl font-medium md:pr-8 md:mb-4">
        Get a clear view of your book <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">reading</span> goals
      </h1>

      <div className="w-full mx-auto my-12">
        <div className="stats w-full bg-secondary text-secondary-content mx-auto p-4">
          <BookSearch />
        </div>
      </div>
    </div>
  );
};

export default Hero;
