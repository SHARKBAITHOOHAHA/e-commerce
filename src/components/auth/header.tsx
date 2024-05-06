import React from "react";
import { FcLock } from "react-icons/fc";

interface HeaderProps {
  label: String;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="flex space-y-4 flex-col items-center justify-center w-full">
      <div className="flex items-center text-4xl font-semibold">
        <FcLock />
        <h1> AUTH</h1>
      </div>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
