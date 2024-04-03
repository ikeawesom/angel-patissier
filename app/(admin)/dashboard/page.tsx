import React from "react";
import { getSupabaseServer } from "@/src/supabase/server";
import { redirect } from "next/navigation";
import LogoutButton from "@/src/components/auth/LogoutButton";

export default async function page() {
  const supabase = getSupabaseServer();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) redirect("/");

  return (
    <div>
      <h1>Welcome {data.user.user_metadata["first_name"]}!</h1>
      <LogoutButton />
    </div>
  );
}
