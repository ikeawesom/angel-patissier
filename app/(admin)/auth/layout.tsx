import Back from "@/src/components/navigation/Back";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-svh background-auth p-10 w-full grid place-items-center relative">
      <Back dark>Return Back</Back>
      {children}
    </div>
  );
}
