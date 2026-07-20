import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const bricolage = localFont({
  variable: "--font-bricolage",
  src: [
    { path: "./fonts/bricolage-grotesque-700.woff2", weight: "700", style: "normal" },
    { path: "./fonts/bricolage-grotesque-800.woff2", weight: "800", style: "normal" }
  ]
});

const spaceGrotesk = localFont({
  variable: "--font-space-grotesk",
  src: [
    { path: "./fonts/space-grotesk-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/space-grotesk-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/space-grotesk-700.woff2", weight: "700", style: "normal" }
  ]
});

const materialSymbols = localFont({ variable: "--font-material-symbols", src: "./fonts/material-symbols-rounded-400.woff2" });

export const metadata: Metadata = {
  title: "GDG · VIT Chennai",
  description: "A student developer community at VIT Chennai."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} ${spaceGrotesk.variable} ${materialSymbols.variable}`}>{children}</body>
    </html>
  );
}
