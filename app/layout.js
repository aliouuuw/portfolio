import { DM_Sans, Inter, Red_Hat_Display } from "next/font/google";
import "./globals.css";

const inter = Red_Hat_Display({ subsets: ["latin"] });

export const metadata = {
  title: "Aliou Wade",
  description: "Aliou Wade's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
