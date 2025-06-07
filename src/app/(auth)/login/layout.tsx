import type { Metadata } from "next";
import "../../(main)/globals.css";

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
    <html>
      <body>{children}</body>
    </html>
  );
}
