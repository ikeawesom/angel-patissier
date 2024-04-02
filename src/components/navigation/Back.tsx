"use client";
import { DEFAULT_ICON_SIZE, UtilityType } from "@/src/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function Back({ children, dark }: UtilityType) {
  const router = useRouter();
  return (
    <p
      onClick={() => router.back()}
      className="text-slate-50 absolute top-10 left-10 duration-150 cursor-pointer hover:-translate-x-1 hover:text-primary"
    >
      <span className="flex items-center justify-center">
        <Image
          alt="Back"
          src={
            dark
              ? "/icons/navigation/back-bright.svg"
              : "/icons/navigation/back-primary.svg"
          }
          color="red"
          width={DEFAULT_ICON_SIZE}
          height={DEFAULT_ICON_SIZE}
        />
        {children}
      </span>
    </p>
  );
}
