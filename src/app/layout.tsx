import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NavigationEvents from "@/components/NavigationEvents";

export const metadata: Metadata = {
  title: {
    default: "restnet",
    template: "restnet | %s",
  },
  description: "Travel tour booking site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavigationEvents />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
