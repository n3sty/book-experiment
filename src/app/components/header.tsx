import React from "react";

// Standard header that is persistent over the entire website, should display a logo/title that
// links to the landing page, and an avatar dropdown that links to the personal dashboard or a login
// page for users that are not logged in yet.

export default function Header() {
  const isLoggedIn = false;

  return (<>
    <div className="navbar bg-base-100 text-base-content">
      <div className="navbar-start" />
      <div className="navbar-center">
        <a className="btn btn-ghost font-black text-2xl">Bookmark &#x1F516;</a>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="placeholder"
                className="rounded-full"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[10] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge badge-ghost">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="bg-base-100 m-0 p-0 divider" />
    </>
  );
}
