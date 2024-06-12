import React from "react";
import BookDemo from "../books/bookdemo";
import { rate } from "../books/scripts"

const Hero = () => {
  return (
    <div className="flex min-h-screen md:flex-row flex-col text-left max-w-screen-xl">
      <div>
        <h1 className="md:text-6xl text-4xl font-medium md:pr-8 md:mb-4">
          Get a clear view of your book <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">reading</span> goals
        </h1>
        <p className="text-xl font-light my-8 mx-auto">
          This calculator assumes a reading speed of {rate} pages per hour (2 minutes per page) and calculates a few fun facts with that info!
        </p>
      </div>  

      <div className="w-full">
        <div className="stats w-full m-4">
          <BookDemo />
        </div>
      </div>
    </div>
  );
};

export default Hero;
