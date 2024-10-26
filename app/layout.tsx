import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/components/AuthProvider";
import AppBar from "@/components/AppBar";
import { Toaster } from "@/components/ui/sonner";
export const metadata: Metadata = {
  title: "AlgoHub",
  description: "Practise Data Structures and Algorithms with AlgoHub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
            <AppBar />
            {children}
            <Toaster  richColors theme="light" />
        </AuthProvider>
      </body>
    </html>
  );
}
