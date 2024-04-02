import React from "react";
import PrimaryButton from "../utils/PrimaryButton";
import SecondaryButton from "../utils/SecondaryButton";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="background-hero h-[90vh] w-full p-10 grid place-items-center">
      <div className="flex flex-col items-center justify-center gap-6 max-w-[800px] w-full text-center">
        <h1 className="sm:text-6xl text-4xl font-bold text-slate-50">
          We love delicious homemade pastry, and so will you.
        </h1>
        <p className="text-slate-50 sm:text-xl">
          Treat yourself to a taste of nostalgia. Explore our delectable
          selection and discover why every bite feels like coming home.
        </p>
        <div className="flex items-center justify-center gap-4 sm:w-fit sm:flex-row flex-col w-full">
          <Link href="/products" className="sm:w-fit max-[400px]:w-full">
            <PrimaryButton>Shop Now</PrimaryButton>
          </Link>
          <Link href="/about" className="sm:w-fit max-[400px]:w-full">
            <SecondaryButton>Learn More</SecondaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
