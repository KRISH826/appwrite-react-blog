/** @format */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth/auth";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { login } from "../redux/featured/authSlice";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [errorr, seterrorr] = useState("");

  const signupHandle = async (data) => {
    seterrorr("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login(userData));
        }
        navigate("/login");
      }
    } catch (error) {
      seterrorr(error);
      console.log(error);
    }
  };

  return (
    <div className='bg-gray-800 h-screen flex items-center justify-center'>
      <div
        className='flex flex-col w-[450px] p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100'
        bis_skin_checked='1'>
        <div className='mb-8 text-center' bis_skin_checked='1'>
          <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
          <p className='text-sm text-gray-400'>Create Your Own Account</p>
        </div>
        <form className='space-y-12' onSubmit={handleSubmit(signupHandle)}>
          <div className='space-y-4' bis_skin_checked='1'>
            <div bis_skin_checked='1'>
              <Input
                placeholder='Enter your Name'
                label='Name'
                type='text'
                {...register("name", {
                  required: true,
                })}
              />
            </div>
            <div bis_skin_checked='1'>
              <Input
                placeholder='Enter your Name'
                label='Email'
                type='email'
                {...register("email", {
                  required: true,
                  validate: {
                    matchPattern: (value) =>
                      /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/gim.test(value) ||
                      "Invalid Address",
                  },
                })}
              />
            </div>
            <div bis_skin_checked='1'>
              <Input
                type='password'
                label='Enter Password'
                placeholder='Password'
                {...register("password", {
                  required: true,
                })}
              />
            </div>
          </div>
          <div bis_skin_checked='1'>
            <div bis_skin_checked='1'>
              <Button>Sign Up</Button>
            </div>
            <p className='px-6 text-sm text-center mt-2 text-gray-400'>
              have an account?
              <Link
                rel='noopener noreferrer'
                to='/login'
                className='hover:underline text-violet-400'>
                Sign up
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
