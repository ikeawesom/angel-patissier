import React from "react";
import NavComponent from "./NavComponent";
import Logo from "../brand/Logo";
import LogoutButton from "../auth/LogoutButton";
import Wrapper from "../utils/Wrapper";
import Link from "next/link";

export default function DashboardNavbar() {
  return (
    <NavComponent>
      <Wrapper className="flex items-center justify-between">
        <Link className="custom" href="/">
          <Logo />
        </Link>
        <LogoutButton />
      </Wrapper>
    </NavComponent>
  );
}
