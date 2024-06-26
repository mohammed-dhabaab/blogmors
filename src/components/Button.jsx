import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";
import { useState } from "react";

const Button = ({ title, link, className, type, size, ...props }) => {
  return (
    <button
      className={twMerge(buttonVariants({ type, size }), className)}
      {...props}
    >
      {link ? <Link to={link}>{title}</Link> : title}
      {/* <Link to={link}>{title}</Link> */}
    </button>
  );
};

const buttonVariants = cva(
  "rounded-full transition-all ease-in-out duration-700 hover:scale-[1.01]",
  {
    variants: {
      type: {
        primary: ["bg-btn-primary"],
        secondary: ["glassmorphism", "hover:bg-btn-primary"],
        ghost: ["hover:bg-btn-primary"],
        danger: ["bg-red-500", "hover:bg-red-600"],
      },
      size: {
        sm: ["text-sm", "py-[0.20rem]", "px-6"],
        md: ["text-base", "py-1", "px-8"],
        lg: ["text-lg", "font-bold", "py-2", "px-10"],
      },
    },
    compoundVariants: [],
    defaultVariants: {
      type: "secondary",
      size: "md",
    },
  },
);

export default Button;
