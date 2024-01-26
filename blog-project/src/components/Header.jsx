/** @format */

import React from "react";
import Button from "./ui/Button";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import authService from "../appwrite/auth/auth";
import { logout } from "../redux/featured/authSlice";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const dispatch = useDispatch();
  console.log(authStatus);
  const navigate = useNavigate();
  const LoginHandler = () => {
    navigate("/login");
  };
  const SignupHandler = () => {
    navigate("/signup");
  };

  const logOutHandler = () => {
    authService.logOutUser().then(() => {
      dispatch(logout());
    });
    navigate("/login");
    console.log("log out sucessfull");
  };
  return (
    <header className='p-4 bg-gray-800 text-gray-100'>
      <div className='container flex justify-between h-16 mx-auto'>
        <div className='flex items-center flex-1 gap-10'>
          <Link
            rel='noopener noreferrer'
            to='/'
            aria-label='Back to homepage'
            className='flex text-4xl font-satisfy items-center p-2'>
            Frank Blog
          </Link>
          <ul className='hidden items-center gap-6 space-x-3 lg:flex'>
            <li className='flex'>
              <Link
                rel='noopener noreferrer'
                to='/'
                className='flex items-center py-2 -mb-1 border-b-2 border-transparent'>
                Posts
              </Link>
            </li>
            <li className='flex'>
              <Link
                rel='noopener noreferrer'
                to='/'
                className='flex items-center py-2 -mb-1 border-b-2 border-transparent text-violet-400 border-violet-400'>
                Add Posts
              </Link>
            </li>
            <li className='flex'>
              <Link
                rel='noopener noreferrer'
                to='/'
                className='flex items-center py-2 -mb-1 border-b-2 border-transparent'>
                Link
              </Link>
            </li>
            <li className='flex'>
              <Link
                rel='noopener noreferrer'
                to='/'
                className='flex items-center py-2 -mb-1 border-b-2 border-transparent'>
                Link
              </Link>
            </li>
          </ul>
        </div>
        <div className='items-center justify-end flex gap-3 flex-1 flex-shrink-0'>
          {authStatus ? (
            <Button onClick={logOutHandler} className='w-[125px]'>
              Log Out
            </Button>
          ) : (
            <Button onClick={LoginHandler} className='w-[125px]'>
              Sign In
            </Button>
          )}
          {!authStatus && (
            <Button onClick={SignupHandler} className='w-[125px]'>
              Sign Up
            </Button>
          )}
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
