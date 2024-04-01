"use client";
import React, { useState } from "react";
import Image from "next/image";
import { DEFAULT_ICON_SIZE } from "@/src/constants";
import NavActionLinks from "./NavActionLinks";
import NavbarLinks from "./NavbarLinks";
import NavLogo from "./NavLogo";
import MobileNavMenu from "./MobileNavMenu";
import { twMerge } from "tailwind-merge";

export default function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <>
      <nav className="z-20 w-full bg-background sticky top-0 left-0 shadow-sm">
        <div className="w-full relative flex items-center justify-between py-4 px-5">
          <div className="flex items-center justify-start gap-4 min-[1000px]:hidden">
            <Image
              onClick={() => setShow(!show)}
              alt="Menu"
              src={show ? "/icons/cross.svg" : "/icons/hamburger.svg"}
              width={DEFAULT_ICON_SIZE}
              height={DEFAULT_ICON_SIZE}
            />
            <NavLogo />
          </div>
          <NavbarLinks className="max-[1000px]:hidden" />
          <NavLogo className="max-[1000px]:hidden" />
          <NavActionLinks />
        </div>
      </nav>
      <MobileNavMenu
        className={twMerge(
          "z-10 fixed duration-300 h-full top-[62px] left-0",
          show ? "opacity-100" : "opacity-0"
        )}
      />
    </>
  );
}
