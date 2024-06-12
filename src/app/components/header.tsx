'use client';

import React, { useEffect, useState } from "react";

// Standard header that is persistent over the entire website, should display a logo/title that
// links to the landing page, and an avatar dropdown that links to the personal dashboard or a login
// page for users that are not logged in yet.

export default function Header() {

  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme") || "false")
  );

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);


  return (
    <>
      <div className="navbar justify-around bg-base-300 text-base-content">
        <div className="flex items-center">
          <a className="btn btn-ghost font-medium text-3xl" href="/">
            Bookmark &#x1F516;
          </a>
        </div>
        <div className="flex items-center">
          <label className="flex cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
            <input
              type="checkbox"
              checked={theme}
              onChange={() => setTheme(!theme)}
              value="light"
              className="toggle theme-controller"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
          </label>
        </div>
      </div>
    </>
  );
}
