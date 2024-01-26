/** @format */

import React, { forwardRef, useId } from "react";

const Input = forwardRef(function Input(
  {
    placeholder = "Enter Your Email",
    label,
    type = "text",
    className = "",
    ...props
  },
  ref
) {
  const id = useId();
  return (
    <div>
      {label && (
        <label className='block mb-2 text-sm text-start' htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        name='username'
        {...props}
        id={id}
        placeholder={placeholder}
        className={`${className} w-full px-4 py-3 rounded-md dark:border-gray-700 bg-gray-900 text-gray-100 border dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400`}
        ref={ref}
      />
    </div>
  );
});

export default Input;
