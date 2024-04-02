import React from "react";
import FormInputContainer from "../utils/FormInputContainer";
import Link from "next/link";
import RightPrimaryButton from "../utils/RightPrimaryButton";

export default function LoginForm() {
  return (
    <form className="flex flex-col items-start justify-start w-full gap-4">
      <FormInputContainer id="email" text="Email Address">
        <input placeholder="Enter your email address" name="email" />
      </FormInputContainer>
      <FormInputContainer id="password" text="Password">
        <input placeholder="Enter your password" name="password" />
      </FormInputContainer>
      <Link
        href="/auth/forgot-password"
        className="text-sm text-light-text underline hover:text-primary"
      >
        Forgot Password
      </Link>
      <RightPrimaryButton>Sign In</RightPrimaryButton>
      <p className="text-sm text-light-text">
        New here?{" "}
        <span>
          <Link className="font-bold text-primary custom" href="/auth/register">
            Sign up
          </Link>
          .
        </span>
      </p>
    </form>
  );
}
