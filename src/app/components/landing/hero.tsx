import React from "react";
import BookDemo from "@/app/components/books/bookdemo";
import { rate } from "@/app/components/books/scripts";

const Hero = () => {
  return (
    <div className="min-h-screen text-left max-w-screen-lg">
      <div className="grid grid-flow-row grid-cols-3">
        <h1 className="col-span-2 lg:text-6xl lg:pr-8 mb-4 text-5xl font-medium">
          Get a clear view of your
          <span className="text-primary"> book reading goals</span>.
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
