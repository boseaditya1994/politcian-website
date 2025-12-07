import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Politician X",
  description: "A Politician Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        content="width=device-width, initial-scale=1"
        name="viewport"
      ></meta>
      <body>{children}</body>
    </html>
  );
}
