import React from 'react'

// Standard header that is persistent over the entire website, should display a logo/title that
// links to the landing page, and an avatar dropdown that links to the personal dashboard or a login
// page for users that are not logged in yet.

export default function Header() {
  return (
    <header className='shadow-md'>
      <div className='navbar p-4 bg-base-300'>
        <div className='navbar-start'/>
          {/* Needs to be empty because otherwise the center and end components won't render properly */}
        <div className='navbar-center'>
          {/* Holds the Logo and title of the page */}
          <a href={'/'} className='btn btn-ghost font-extrabold text-3xl'>Bookmark &#x1F516;</a>
        </div>
        <div className='navbar-end'>
          {/* Holds the dropdown avatar menu for the dashboard and personal pages */}
          <div className='dropdown dropdown-end'>
            <div tabIndex={0} role='button' className='btn btn-ghost btn-circle avatar'>
              <div className='w-10 rounded-full'>
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Profile Picture Avatar" />
              </div>
            </div>
            <ul tabIndex={0} className='mt-5 z-[-1] p-2 shadow menu menu-sm dropdown-content bg-primary text-primary-content rounded-box w-52'>
              <li>
                <a href={'/dashboard'} className='justify-between'>
                  Dashboard
                  <span className='badge'>New</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}