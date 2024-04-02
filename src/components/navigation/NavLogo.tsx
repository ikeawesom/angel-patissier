import Link from "next/link";
import React from "react";
import Logo from "../brand/Logo";
import { twMerge } from "tailwind-merge";
import { UtilityType } from "@/src/constants";

export default function NavLogo({ className }: UtilityType) {
  return (
    <Link href="/" className={twMerge("custom nav-logo", className)}>
      <Logo />
    </Link>
  );
}
