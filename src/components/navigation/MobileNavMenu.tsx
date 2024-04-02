import React from "react";
import { twMerge } from "tailwind-merge";
import NavbarLinks from "./NavbarLinks";
import PrimaryButton from "../utils/PrimaryButton";
import Link from "next/link";
import { UtilityType } from "@/src/constants";

export default function MobileNavMenu({ className }: UtilityType) {
  return (
    <div
      className={twMerge(
        "w-full bg-background flex flex-col items-start justify-start gap-4 p-4",
        className
      )}
    >
      <NavbarLinks className="flex-col items-start justify-start" />
      <hr className="h-[0.5px] w-full rounded-full bg-gray-50" />
      <div className="flex flex-col w-full items-start justify-start gap-2">
        <Link href="/auth/register" className="w-full">
          <PrimaryButton>Sign Up</PrimaryButton>
        </Link>
        <p className="text-sm text-light-text">
          Already have an account?{" "}
          <span>
            <Link className="font-bold text-primary custom" href="/auth/login">
              Sign in
            </Link>
            .
          </span>
        </p>
      </div>
    </div>
  );
}
