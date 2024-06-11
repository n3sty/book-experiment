import React from "react";

// Standard header that is persistent over the entire website, should display a logo/title that
// links to the landing page, and an avatar dropdown that links to the personal dashboard or a login
// page for users that are not logged in yet.

export default function Header() {
  return <>
    <div className="navbar justify-center bg-base-100 text-base-content">
        <a 
        className="btn btn-ghost font-medium text-3xl"
        href="/"
        >Bookmark &#x1F516;</a>
    </div>
    </>;
}
