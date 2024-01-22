/** @format */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import authService from "../appwrite/auth/auth";
import Input from "./ui/Input";
import Button from "./ui/Button";

const Signup = () => {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div>
      {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
      <form onSubmit={handleSubmit(create)}>
        <div className='space-y-5'>
          <Input
            label='Full Name: '
            placeholder='Enter your full name'
            {...register("name", {
              required: true,
            })}
          />
          <Input
            label='Email: '
            placeholder='Enter your email'
            type='email'
            {...register("email", {
              required: true,
              validate: {
                matchPatern: (value) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  "Email address must be a valid address",
              },
            })}
          />
          <Input
            label='Password: '
            type='password'
            placeholder='Enter your password'
            {...register("password", {
              required: true,
            })}
          />
          <Button type='submit' className='w-full'>
            Create Account
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
