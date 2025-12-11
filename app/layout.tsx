import type { Metadata } from "next";
import { Urbanist, Inter } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Blue Wave Laundry | Modern Speed Queen Laundromat in Hillsboro, OR",
  description:
    "Brand new Speed Queen laundromat with high-capacity machines, ozone sanitation, and contactless payment. Open 7 days a week, 6am-10pm.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${urbanist.variable} ${inter.variable}`}>
      <body className="font-body overflow-x-hidden">{children}</body>
    </html>
  );
}

