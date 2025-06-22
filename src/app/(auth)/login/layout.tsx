import type { Metadata } from "next";
import "../../globals.css";

export const metadata: Metadata = {
  title: "restnet | login",
  description: "Travel tour booking site",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
