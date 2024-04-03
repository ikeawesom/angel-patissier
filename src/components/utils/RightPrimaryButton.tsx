import { DEFAULT_ICON_SIZE } from "@/src/constants";
import React from "react";
import PrimaryButton, { ButtonType } from "./PrimaryButton";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function RightPrimaryButton({
  children,
  className,
  disabled,
  onClick,
  type,
  loading,
}: ButtonType) {
  return (
    <PrimaryButton
      onClick={onClick}
      disabled={disabled}
      type={type ? type : "button"}
      className={twMerge("flex items-center justify-center group", className)}
    >
      <span
        className={twMerge(
          !disabled && "group-hover:-translate-x-[2px] duration-150"
        )}
      >
        {children}
      </span>
      {loading ? (
        <Image
          src="/icons/spinner-bright.svg"
          alt="Loading"
          className="animate-spin ease-in-out ml-2"
          width={DEFAULT_ICON_SIZE * 0.8}
          height={DEFAULT_ICON_SIZE * 0.8}
        />
      ) : (
        <Image
          src="/icons/right.svg"
          alt="Sign In"
          className={twMerge(
            "translate-y-[1.5px] duration-150",
            !disabled && "group-hover:translate-x-[2px]"
          )}
          width={DEFAULT_ICON_SIZE * 0.8}
          height={DEFAULT_ICON_SIZE * 0.8}
        />
      )}
    </PrimaryButton>
  );
}
