import React from "react";
import BookDemo from "../books/bookdemo";
import { rate } from "../books/scripts";

const Hero = () => {
  return (
    <div className="flex min-h-screen flex-col text-left max-w-screen-lg">
      <div className="grid lg:grid-cols-2">
        <h1 className="lg:text-6xl lg:pr-8 mb-4 text-5xl font-medium">
          Get a clear view of your{" "}
          <span className="text-primary">book reading goals</span>
        </h1>
        <p className="text-xl font-light text-justify mx-auto">
          This calculator assumes a reading speed of {rate} pages per hour (2
          minutes per page) and calculates a few fun facts with that
          information.
        </p>
      </div>

      <div className="bg-transparent">
        <BookDemo />
      </div>
    </div>
  );
};

export default Hero;
