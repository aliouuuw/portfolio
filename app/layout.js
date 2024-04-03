import { DM_Sans, Questrial, Red_Hat_Display } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Questrial({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Aliou Wade",
  description: "Aliou Wade's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
