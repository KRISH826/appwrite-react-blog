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
  const [error, setError] = useState("");

  const create = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate("/login");
      }
    } catch (error) {
      setError(error.message);
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
          {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
        </div>
        <form className='space-y-12' onSubmit={handleSubmit(create)}>
          <div className='space-y-4' bis_skin_checked='1'>
            <div bis_skin_checked='1'>
              <Input
                label='Full Name: '
                placeholder='Enter your full name'
                {...register("name", {
                  required: true,
                })}
              />
            </div>
            <div bis_skin_checked='1'>
              <Input
                label='Email: '
                placeholder='Enter your email'
                type='email'
                {...register("email", {
                  required: true,
                  validate: {
                    matchPatern: (value) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                        value
                      ) || "Email address must be a valid address",
                  },
                })}
              />
            </div>
            <div bis_skin_checked='1'>
              <Input
                label='Password: '
                type='password'
                placeholder='Enter your password'
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
