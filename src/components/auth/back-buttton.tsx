"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
interface BackButtonProps {
  label: string;
  href: string;
}
export const BackButton = ({ href, label }: BackButtonProps) => {
  return (
    <Button variant={"link"} asChild size="sm" className="w-full font-[400] ">
      <Link href={href}>{label}</Link>
    </Button>
  );
};
