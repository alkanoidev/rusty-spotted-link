import React from "react";

export default function Button({
  children,
  onClick,
}: {
  children: JSX.Element | JSX.Element[] | string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="transition capitalize w-full border relative border-primary rounded text-lg text-dark dark:text-light py-2 
    z-0 after:w-full after:h-full after:bg-gradient-to-tr from-primary to-primary1 after:top-0 after:left-0 after:absolute 
    after:z-[-1] after:opacity-50 after:transition hover:after:opacity-60 font-semibold"
    >
      {children}
    </button>
  );
}
