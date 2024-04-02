import { DEFAULT_ICON_SIZE, WhyUsCardType } from "@/src/constants";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function WhyUsCard({
  desc,
  src,
  title,
  className,
}: WhyUsCardType) {
  return (
    <div
      className={twMerge(
        "flex flex-col gap-4 items-start justify-start self-start max-[640px]:w-full",
        className
      )}
    >
      <Image
        src={src}
        alt="title"
        width={DEFAULT_ICON_SIZE * 1.7}
        height={DEFAULT_ICON_SIZE * 1.7}
      />
      <h2 className="text-2xl">{title}</h2>
      <p>{desc}</p>
    </div>
  );
}
