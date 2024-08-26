"use client"; // Mark this component as a client component

import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <Navbar />
      <div className="max-w-7xl mx-auto">{children}</div>
      <Footer />
    </SessionProvider>
  );
}
