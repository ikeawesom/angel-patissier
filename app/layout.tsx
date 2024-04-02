import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Angel's Patisserie",
    default: "Angel's Patisserie",
  },
  description: "Homemade bakery at your doorstep.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background">{children}</body>
    </html>
  );
}
