"use client";
import Link from "next/link";
import React, { useState } from "react";
import FormInputContainer from "../utils/FormInputContainer";
import RightPrimaryButton from "../utils/RightPrimaryButton";
import { handleForgotPassword, handleLoginForm } from "./handleAuth";

export default function ForgotPassForm() {
  const [email, setEmail] = useState("");

  const ready = email !== "";
  return (
    <form
      action={handleForgotPassword}
      className="flex flex-col items-start justify-start w-full gap-4"
    >
      <FormInputContainer id="email" text="Email Address">
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          required
          type="email"
          placeholder="Enter your email address"
          name="email"
        />
      </FormInputContainer>

      <RightPrimaryButton className="mt-0" type="submit" disabled={!ready}>
        Send Reset Link
      </RightPrimaryButton>
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
