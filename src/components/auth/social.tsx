"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

import React from "react";
import { Button } from "../ui/button";

export const Social = () => {
  return (
    <div className=" w-full flex gap-x-2 items-center">
      <Button
        variant={"outline"}
        size="lg"
        className="w-full"
        onClick={() => {}}
      >
        <FcGoogle />
      </Button>
      <Button
        variant={"outline"}
        size="lg"
        className="w-full"
        onClick={() => {}}
      >
        <FaGithub />
      </Button>
    </div>
  );
};
