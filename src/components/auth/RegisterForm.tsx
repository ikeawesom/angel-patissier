"use client";
import React, { useState } from "react";
import FormInputContainer from "../utils/FormInputContainer";
import RightPrimaryButton from "../utils/RightPrimaryButton";
import Link from "next/link";
import { handleRegisterForm } from "./handleAuth";

export default function RegisterForm() {
  const [details, setDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    "cfm-password": "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const ready =
    details["cfm-password"] !== "" &&
    details["cfm-password"] === details["password"] &&
    details.fname !== "" &&
    details.lname !== "" &&
    details.email !== "";

  return (
    <form
      action={handleRegisterForm}
      className="flex flex-col items-start justify-start w-full gap-4"
    >
      <div className="flex items-center justify-between gap-4 w-full">
        <FormInputContainer id="fname" text="First Name">
          <input
            onChange={handleChange}
            value={details.fname}
            required
            placeholder="Enter your given name"
            name="fname"
          />
        </FormInputContainer>
        <FormInputContainer id="lname" text="Last Name">
          <input
            onChange={handleChange}
            value={details.lname}
            required
            placeholder="Enter your last name"
            name="lname"
          />
        </FormInputContainer>
      </div>
      <FormInputContainer id="email" text="Email Address">
        <input
          onChange={handleChange}
          value={details.email}
          required
          placeholder="Enter your email address"
          name="email"
          type="email"
        />
      </FormInputContainer>
      <FormInputContainer id="password" text="Password">
        <input
          value={details.password}
          required
          placeholder="Enter a password"
          name="password"
          type="password"
          onChange={handleChange}
        />
      </FormInputContainer>
      <FormInputContainer id="cfm-password" text="Confirm Password">
        <input
          value={details["cfm-password"]}
          required
          placeholder="Re-Enter a password"
          name="cfm-password"
          type="password"
          onChange={handleChange}
        />
      </FormInputContainer>
      <RightPrimaryButton disabled={!ready} type="submit">
        Sign Up
      </RightPrimaryButton>
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
