import React from "react";
import PrimaryButton from "./PrimaryButton";
import { twMerge } from "tailwind-merge";

export type ButtonType = {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  border?: boolean;
};

export default function SecondaryButton(props: ButtonType) {
  return (
    <PrimaryButton
      onClick={props.onClick}
      disabled={props.disabled}
      type={props.type ? props.type : "button"}
      className={twMerge(
        "bg-slate-50 text-gray-700",
        `${props.disabled ? "opacity-70 cursor-not-allowed" : ""}`,
        props.border && "border-[1px] border-slate-50",
        props.className
      )}
    >
      {props.children ? props.children : "Click Me"}
    </PrimaryButton>
  );
}
