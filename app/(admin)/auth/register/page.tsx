import RegisterForm from "@/src/components/auth/RegisterForm";
import DefaultCard from "@/src/components/utils/DefaultCard";

export default async function RegisterPage() {
  return (
    <DefaultCard className="flex flex-col items-start justify-start gap-6">
      <h1 className="text-4xl">Sign Up</h1>
      <RegisterForm />
    </DefaultCard>
  );
}
