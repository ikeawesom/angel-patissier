"use client";
import React, { useState } from "react";
import FormInputContainer from "../utils/FormInputContainer";
import Link from "next/link";
import RightPrimaryButton from "../utils/RightPrimaryButton";
import { handleLoginForm } from "./handleAuth";

export default function LoginForm() {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const ready = details.email !== "" && details.password !== "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  return (
    <form
      action={handleLoginForm}
      className="flex flex-col items-start justify-start w-full gap-4"
    >
      <FormInputContainer id="email" text="Email Address">
        <input
          value={details.email}
          onChange={handleChange}
          required
          placeholder="Enter your email address"
          name="email"
        />
      </FormInputContainer>
      <FormInputContainer id="password" text="Password">
        <input
          value={details.password}
          onChange={handleChange}
          required
          placeholder="Enter your password"
          name="password"
          type="password"
        />
      </FormInputContainer>
      <Link
        href="/auth/forgot-password"
        className="text-sm text-light-text underline hover:text-primary"
      >
        Forgot Password
      </Link>
      <RightPrimaryButton className="mt-2" disabled={!ready}>
        Sign In
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
