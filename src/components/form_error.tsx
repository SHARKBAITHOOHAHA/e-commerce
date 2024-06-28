import React from "react";
import { BiError } from "react-icons/bi";

interface IFormErrorProps {
  message?: string;
}

export const FormError = ({ message }: IFormErrorProps) => {
  if (!message) return null;

  return (
    <div className="gap-x-2 p-3 flex items-center font-semibold rounded-md  text-sm text-destructive bg-destructive/15 ">
      <BiError />
      <p>{message}</p>
    </div>
  );
};
