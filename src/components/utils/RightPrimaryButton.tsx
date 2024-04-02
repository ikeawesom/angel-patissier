import { DEFAULT_ICON_SIZE } from "@/src/constants";
import React from "react";
import PrimaryButton, { ButtonType } from "./PrimaryButton";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function RightPrimaryButton({
  children,
  className,
}: ButtonType) {
  return (
    <PrimaryButton
      className={twMerge(
        "mt-4 flex items-center justify-center group",
        className
      )}
    >
      <span className="group-hover:-translate-x-[2px] duration-150">
        {children}
      </span>
      <Image
        src="/icons/right.svg"
        alt="Sign In"
        className="translate-y-[2px] group-hover:translate-x-[2px] duration-150"
        width={DEFAULT_ICON_SIZE}
        height={DEFAULT_ICON_SIZE}
      />
    </PrimaryButton>
  );
}
