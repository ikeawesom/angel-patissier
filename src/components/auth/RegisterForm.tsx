import React from "react";
import FormInputContainer from "../utils/FormInputContainer";
import RightPrimaryButton from "../utils/RightPrimaryButton";
import Link from "next/link";

export default function RegisterForm() {
  return (
    <form className="flex flex-col items-start justify-start w-full gap-4">
      <FormInputContainer id="email" text="Email Address">
        <input placeholder="Enter your email address" name="email" />
      </FormInputContainer>
      <FormInputContainer id="password" text="Password">
        <input placeholder="Enter your password" name="password" />
      </FormInputContainer>
      <FormInputContainer id="cfm-password" text="Confirm Password">
        <input placeholder="Re-Enter your password" name="cfm-password" />
      </FormInputContainer>
      <RightPrimaryButton>Sign Up</RightPrimaryButton>
      <p className="text-sm text-light-text">
        Already have an account?{" "}
        <span>
          <Link className="font-bold text-primary custom" href="/auth/login">
            Sign in
          </Link>
          .
        </span>
      </p>
    </form>
  );
}
