/** @format */

import React from "react";
import Button from "./ui/Button";

const Header = () => {
  return (
    <header className='p-4 bg-gray-800 text-gray-100'>
      <div
        className='container flex justify-between h-16 mx-auto'
        bis_skin_checked='1'>
        <div className='flex items-center gap-10' bis_skin_checked='1'>
          <a
            rel='noopener noreferrer'
            href='#'
            aria-label='Back to homepage'
            className='flex text-4xl font-satisfy items-center p-2'>
            Frank Blog
          </a>
          <ul className='hidden items-center gap-6 space-x-3 lg:flex'>
            <li className='flex'>
              <a
                rel='noopener noreferrer'
                href='#'
                className='flex items-center py-2 -mb-1 border-b-2 border-transparent'>
                Posts
              </a>
            </li>
            <li className='flex'>
              <a
                rel='noopener noreferrer'
                href='#'
                className='flex items-center py-2 -mb-1 border-b-2 border-transparent text-violet-400 border-violet-400'>
                Add Posts
              </a>
            </li>
            <li className='flex'>
              <a
                rel='noopener noreferrer'
                href='#'
                className='flex items-center py-2 -mb-1 border-b-2 border-transparent'>
                Link
              </a>
            </li>
            <li className='flex'>
              <a
                rel='noopener noreferrer'
                href='#'
                className='flex items-center py-2 -mb-1 border-b-2 border-transparent'>
                Link
              </a>
            </li>
          </ul>
        </div>
        <div
          className='items-center flex gap-3 flex-shrink-0'
          bis_skin_checked='1'>
          <Button>Log In</Button>
          <Button>Sign Up</Button>
        </div>
        <button className='p-4 lg:hidden'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='w-6 h-6 text-gray-100'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
