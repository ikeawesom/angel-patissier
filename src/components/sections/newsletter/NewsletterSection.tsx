import React from "react";
import NewsletterForm from "./NewsletterForm";

export default function NewsletterSection() {
  return (
    <div className="flex items-center justify-between gap-4 max-[640px]:flex-wrap w-full">
      <div className="flex flex-col items-start justify-start gap-8 flex-1 p-10 sm:px-16">
        <h1 className="text-4xl font-bold">Stay Connected</h1>
        <p>
          Don't miss out on the latest news and exclusive offers! Sign up for
          our newsletter to stay connected with us. Be the first to know about
          exciting updates, special promotions, and community events.
        </p>
        <NewsletterForm />
      </div>
      <div className="background-newsletter h-[40vh] sm:h-[60vh] sm:flex-1 max-[640px]:w-full" />
    </div>
  );
}
