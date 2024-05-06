"use client";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) => {
  const router = useRouter();
  const onClick = () => {
    router.push("/auth/login");
  };
  if (mode == "modal") return <span>TODO: implement model</span>;

  return (
    <span className="cursor-pointer" onClick={onClick}>
      {children}
    </span>
  );
};
