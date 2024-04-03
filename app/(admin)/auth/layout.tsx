import Back from "@/src/components/navigation/Back";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-svh background-auth p-10 flex flex-col items-start justify-start gap-10">
      <Back dark>Go Back</Back>
      <div className="w-full grid place-items-center gap-10 h-full">
        {children}
      </div>
    </div>
  );
}
