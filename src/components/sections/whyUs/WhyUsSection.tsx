import React from "react";
import Logo from "../../brand/Logo";
import { WHY_US_CARDS, WhyUsCardType } from "@/src/constants";
import WhyUsCard from "./WhyUsCard";

export default function WhyUsSection() {
  return (
    <div className="w-full text-start flex flex-col items-start justify-start gap-12">
      <h1 className="text-4xl flex items-center justify-center gap-2">
        Why{" "}
        <span>
          <Logo />
        </span>
        ?
      </h1>
      <div className="flex items-center justify-between gap-8 max-[640px]:flex-wrap">
        {WHY_US_CARDS.map((item: WhyUsCardType, index: number) => {
          const { desc, src, title } = item;
          return <WhyUsCard desc={desc} src={src} title={title} key={index} />;
        })}
      </div>
    </div>
  );
}
