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
      className="transition capitalize w-full border relative border-primary rounded text-lg text-off-dark dark:text-off-white py-2 
                 bg-off-white dark:bg-off-dark from-primary to-primary1 font-semibold hover:ring-2 hover:ring-primary"
    >
      {children}
    </button>
  );
}
