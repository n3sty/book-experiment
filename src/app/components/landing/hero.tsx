import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-row text-left max-w-screen-xl">
      <h1 className="text-7xl font-black mb-4 w-1/2">
        Get a clear view of your book <span className="md:text-transparent md:bg-clip-text md:bg-gradient-to-br md:from-purple-600 md:to-blue-400">reading</span> goals
      </h1>
      <div className="flex flex-col w-1/2">
        <div className="stats bg-primary text-primary-content mx-auto my-2">
          <div className="stat">
            <div className="stat-title">Account balance</div>
            <div className="stat-value">$89,400</div>
            <div className="stat-actions">
              <button className="btn btn-sm btn-success">Add funds</button>
            </div>
          </div>
        </div>

        <div className="stats bg-primary text-primary-content mx-auto my-2">
          <div className="stat">
            <div className="stat-title">Account balance</div>
            <div className="stat-value">$89,400</div>
            <div className="stat-actions">
              <button className="btn btn-sm btn-success">Add funds</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
