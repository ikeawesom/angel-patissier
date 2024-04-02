import { UtilityType } from "@/src/constants";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function DefaultCard({ children, className }: UtilityType) {
  return (
    <div
      className={twMerge(
        "w-full max-w-[600px] bg-slate-50 shadow-sm hover:shadow-lg p-8",
        className
      )}
    >
      {children}
    </div>
  );
}
