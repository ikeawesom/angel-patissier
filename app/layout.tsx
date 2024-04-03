import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

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
      <body className="bg-background">
        <Toaster richColors position="top-center" />
        {children}
      </body>
    </html>
  );
}
