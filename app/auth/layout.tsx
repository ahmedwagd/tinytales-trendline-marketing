import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Task Auth",
  description: "Task Auth Page",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      {children}
    </main>
  );
}
