"use server";

import { AuthMemberType } from "@/src/constants";
import { getSupabaseServer } from "@/src/supabase/server";
import handleResponses from "@/src/utils/handleResponses";
import { revalidatePath } from "next/cache";

export async function handleLoginForm(loginDetails: AuthMemberType) {
  const supabase = getSupabaseServer();

  const email = loginDetails["email"];
  const password = loginDetails["password"];

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw new Error(error.message);
    revalidatePath("/");
    return handleResponses({ data });
  } catch (err: any) {
    return handleResponses({ status: false, error: err.message });
  }
}

export async function handleRegisterForm(memberDetails: AuthMemberType) {
  const supabase = getSupabaseServer();

  const first_name = memberDetails["first_name"];
  const last_name = memberDetails["last_name"];
  const email = memberDetails["email"];
  const password = memberDetails["password"];

  try {
    const res = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name,
          last_name,
          role: "member",
        },
      },
    });

    if (res.error) throw new Error(res.error.message);
    return handleResponses({ data: res.data });
  } catch (err: any) {
    return handleResponses({ status: false, error: err.message });
  }
}

export async function handleForgotPassword(formData: FormData) {
  console.log(formData);
}

export async function handleLogout() {
  const supabase = getSupabaseServer();

  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw new Error(error.message);
    revalidatePath("/");
    return handleResponses();
  } catch (err: any) {
    return handleResponses({ status: false, error: err.message });
  }
}
