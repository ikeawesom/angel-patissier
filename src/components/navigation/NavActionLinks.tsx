import React from "react";
import { NAV_ACTION_LINKS, NavLinksType } from "./Navbar";
import { DEFAULT_ICON_SIZE } from "@/src/constants";
import Link from "next/link";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function NavActionLinks({ className }: { className?: string }) {
  return (
    <div
      className={twMerge("flex items-center justify-center gap-4", className)}
    >
      {NAV_ACTION_LINKS.map((item: NavLinksType) => {
        return (
          <Link href={item.link} key={item.link}>
            <Image
              alt={item.title}
              src={`/icons/${item.icon}`}
              width={DEFAULT_ICON_SIZE}
              height={DEFAULT_ICON_SIZE}
            />
          </Link>
        );
      })}
    </div>
  );
}
