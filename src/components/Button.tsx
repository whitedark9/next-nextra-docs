import React from "react";

export default function Button({
  children,
  right,
  onClick,
  className,
}: {
  children: React.ReactNode;
  right?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      type={"button"}
      onClick={onClick}
      className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg p-2.5 my-5 w-100 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-base font-bold flex flex-row items-center ${className}`}
    >
      <span className="me-2">{children}</span>
      {right}
    </button>
  );
}
