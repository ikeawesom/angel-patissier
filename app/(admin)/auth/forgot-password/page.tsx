import ForgotPassForm from "@/src/components/auth/ForgotPassForm";
import DefaultCard from "@/src/components/utils/DefaultCard";
import React from "react";

export default function ForgotPasswordPage() {
  return (
    <DefaultCard className="flex flex-col items-start justify-start gap-6">
      <h1 className="text-4xl">Forgot Password</h1>
      <ForgotPassForm />
    </DefaultCard>
  );
}
