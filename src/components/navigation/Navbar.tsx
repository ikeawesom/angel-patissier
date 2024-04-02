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
  const [show, setShow] = useState({
    status: false,
    animating: false,
  });

  const openMenu = () => {
    setShow({ ...show, animating: true });
    setTimeout(() => {
      setShow({ status: !show.status, animating: false });
    }, 100);
  };

  const closeMenu = () => {
    setShow({ status: false, animating: true });
    setTimeout(() => {
      setShow({ animating: false, status: false });
    }, 300);
  };

  return (
    <>
      <nav className="z-20 w-full bg-background sticky top-0 left-0 shadow-sm">
        <div className="w-full relative flex items-center justify-between py-4 px-5">
          <div className="flex items-center justify-start gap-4 min-[1000px]:hidden">
            <Image
              onClick={() => (!show.status ? openMenu() : closeMenu())}
              alt="Menu"
              src={show.status ? "/icons/cross.svg" : "/icons/hamburger.svg"}
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
      {(show.animating || show.status) && (
        <MobileNavMenu
          className={twMerge(
            "z-10 fixed duration-300 h-full top-[62px] left-0",
            show.status ? "opacity-100" : "opacity-0"
          )}
        />
      )}
    </>
  );
}
