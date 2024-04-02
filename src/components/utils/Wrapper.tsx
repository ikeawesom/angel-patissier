import React from "react";
import { twMerge } from "tailwind-merge";

export default function Wrapper({
  children,
  className,
  parentClassName,
}: {
  children?: React.ReactNode;
  parentClassName?: string;
  className?: string;
}) {
  return (
    <div className={twMerge("w-full grid place-items-center", parentClassName)}>
      <div className={twMerge("w-full max-w-[1000px]", className)}>
        {children}
      </div>
    </div>
  );
}
