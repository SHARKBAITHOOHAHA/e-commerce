import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

interface IFormSuccessProps {
  message?: string;
}

export const FormSuccess = ({ message }: IFormSuccessProps) => {
  if (!message) return null;

  return (
    <div className=" gap-x-2 p-3  font-semibold flex items-center rounded-md  text-sm bg-emerald-500/15 text-emerald-500 ">
      <FaRegCircleCheck />
      <p>{message}</p>
    </div>
  );
};
