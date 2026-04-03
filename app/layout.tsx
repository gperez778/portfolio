import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "George Perez — Director of Product Design",
  description:
    "Director of Product Design specializing in UX/UI, design systems, and team leadership. Over a decade of experience shipping products at IMVU, Electronic Arts, and more.",
  openGraph: {
    title: "George Perez — Director of Product Design",
    description:
      "Product design portfolio — design systems, 0-1 products, and team leadership.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
