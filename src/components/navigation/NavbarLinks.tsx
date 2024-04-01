import { NAV_LINKS, NavLinksType } from "@/src/constants";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function NavbarLinks({ className }: { className?: string }) {
  return (
    <div
      className={twMerge("flex items-center justify-between gap-8", className)}
    >
      {NAV_LINKS.map((item: NavLinksType) => {
        return (
          <Link
            className="navbar-links text-primary"
            href={item.link}
            key={item.link}
          >
            {item.title}
          </Link>
        );
      })}
    </div>
  );
}
