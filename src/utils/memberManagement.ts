import { User } from "@supabase/supabase-js";
import { getSupabaseServer } from "../supabase/server";
import handleResponses from "./handleResponses";

export function isNewMember(data: any[]) {
  return data.length === 0;
}

export async function createNewMember(user: User) {
  const {
    id,
    email,
    created_at,
    user_metadata: { first_name, last_name, role },
  } = user;

  const supabase = getSupabaseServer();
  const { data, error } = await supabase
    .from("members")
    .insert([{ uuid: id, first_name, last_name, role, email, created_at }]);
  if (error) return handleResponses({ status: false, error: error.message });

  return handleResponses({ data });
}
