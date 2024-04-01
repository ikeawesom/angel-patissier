import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Angel's Patisserie",
  description: "Homemade bakery at your doorstep.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1>Admin Page</h1>
      {children}
    </>
  );
}
