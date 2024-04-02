"use client";
import React, { ChangeEvent, useState } from "react";
import SecondaryButton from "../../utils/SecondaryButton";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  return (
    <form className="flex flex-col items-start justify-start gap-6 w-full">
      <input
        value={email}
        placeholder="Enter your email here"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />
      <SecondaryButton className="max-[400px]:w-full w-fit hover:translate-x-1">
        Sign Up
      </SecondaryButton>
    </form>
  );
}
