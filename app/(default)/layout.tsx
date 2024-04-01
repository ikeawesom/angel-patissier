import Navbar from "@/src/components/navigation/Navbar";
import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative">
      <Navbar />
      {children}
    </div>
  );
}
