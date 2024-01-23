import React, { forwardRef, useId } from 'react'

const Input = forwardRef(function Input({ placeholder = "Enter Your Email", label, type = "text", className = "", ...props }, ref) {
  const id = useId()
  return (
    <div>
      {label && <label className='inline-block text-start mb-2' htmlFor={id}>{label}</label>}
      <input type={type} name="username" id={id} placeholder={placeholder} className={`${className} w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400`} ref={ref} />
    </div>
  )
})

export default Input
