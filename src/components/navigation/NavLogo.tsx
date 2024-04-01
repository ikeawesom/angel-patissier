import Link from "next/link";
import React from "react";
import Logo from "../brand/Logo";
import { twMerge } from "tailwind-merge";

export default function NavLogo({ className }: { className?: string }) {
  return (
    <Link href="/" className={twMerge("nav-logo", className)}>
      <Logo />
    </Link>
  );
}
