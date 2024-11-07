import type { Metadata } from "next";
import "./globals.css";

import { Poppins } from "next/font/google";
import NavigationBar from "@/components/Navbar";

const poppins = Poppins({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "I ❤️ Hackathon",
  description: "Powered by India Blockchain Month",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
