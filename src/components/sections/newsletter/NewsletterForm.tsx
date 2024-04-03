"use client";
import React, { ChangeEvent, useState } from "react";
import RightSecondaryButton from "../../utils/RightSecondaryButton";

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
      <RightSecondaryButton className="max-[400px]:w-full w-fit">
        Sign Up
      </RightSecondaryButton>
    </form>
  );
}
