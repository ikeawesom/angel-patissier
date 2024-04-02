import LoginForm from "@/src/components/auth/LoginForm";
import DefaultCard from "@/src/components/utils/DefaultCard";

export default async function LoginPage() {
  return (
    <DefaultCard className="flex flex-col items-start justify-start gap-6">
      <h1 className="text-4xl">Sign In</h1>
      <LoginForm />
    </DefaultCard>
  );
}
