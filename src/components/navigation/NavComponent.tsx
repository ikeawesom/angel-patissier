import { UtilityType } from "@/src/constants";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function NavComponent({
  children,
  className,
  parentClassName,
}: UtilityType) {
  return (
    <nav
      className={twMerge(
        "z-20 w-full bg-white sticky top-0 left-0 shadow-sm",
        parentClassName
      )}
    >
      <div
        className={twMerge(
          "w-full relative flex items-center justify-between py-4 px-5",
          className
        )}
      >
        {children}
      </div>
    </nav>
  );
}
