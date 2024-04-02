import React from "react";

export default function FormInputContainer(config: {
  text: string;
  id: string;
  children?: React.ReactNode;
}) {
  const { id, text, children } = config;

  return (
    <div className="flex flex-col w-full items-start justify-start gap-1">
      <label htmlFor={id} className="text-sm text-light-text text-start">
        {text}
      </label>
      {children}
    </div>
  );
}
