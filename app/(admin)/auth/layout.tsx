import Back from "@/src/components/navigation/Back";
import { getSupabaseServer } from "@/src/supabase/server";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = getSupabaseServer();
  const { data } = await supabase.auth.getUser();
  if (data?.user) redirect("/dashboard");

  return (
    <div className="min-h-svh background-auth p-10 flex flex-col items-start justify-start gap-10">
      <Back dark>Go Back</Back>
      <div className="w-full grid place-items-center gap-10 h-full">
        {children}
      </div>
    </div>
  );
}
