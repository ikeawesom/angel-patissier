"use client";
import React, { useState } from "react";
import { handleLogout } from "./handleAuth";
import { toast } from "sonner";
import RightPrimaryButton from "../utils/RightPrimaryButton";

export default function LogoutButton() {
  const [loading, setLoading] = useState(false);
  const logout = async () => {
    setLoading(true);
    const res = await handleLogout();
    if (!res.status) toast.error(res.error);
    setLoading(false);
  };
  return (
    <RightPrimaryButton
      loading={loading}
      disabled={loading}
      className="w-fit"
      onClick={logout}
    >
      Sign Out
    </RightPrimaryButton>
  );
}
