import React from "react";
import { getSupabaseServer } from "@/src/supabase/server";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import { createNewMember, isNewMember } from "@/src/utils/memberManagement";
import { AuthMemberType } from "@/src/constants";
import DashboardNavbar from "@/src/components/navigation/DashboardNavbar";
import Wrapper from "@/src/components/utils/Wrapper";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function page() {
  const supabase = getSupabaseServer();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) redirect("/");

  // get user data
  const { user } = data;
  const res = await supabase.from("members").select("*").eq("uuid", user.id);

  if (isNewMember(res.data as any[])) {
    // create new row if new member
    const res = await createNewMember(user);
    if (!res.status) console.log(res.error);
  }
  const memberData = (res.data as AuthMemberType[])[0];
  const { email, first_name, last_name, role } = memberData;
  const admin = role === "admin";

  return (
    <>
      <DashboardNavbar />
      <Wrapper parentClassName="py-10 bg-background">
        <h1 className="sm:text-5xl text-3xl">Welcome {first_name}!</h1>
      </Wrapper>
    </>
  );
}
