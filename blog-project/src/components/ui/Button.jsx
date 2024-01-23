/** @format */

import React from "react";

export default function Button({
  children,
  type = "button",
  bgColor = "bg-violet-400",
  textColor = "text-black",
  hoverBgCOlor = 'bg-violet-700',
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-6 py-3 font-medium rounded-md border border-solid border-violet-400 ${bgColor} ${textColor} ${className} ease-linear duration-300 transition hover:bg-transparent hover:text-white hover:transition hover:duration-300 `}
      {...props}>
      {children}
    </button>
  );
}
