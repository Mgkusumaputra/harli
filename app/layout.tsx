import { ANALYTICS_SRC, WEBSITE_ID } from "@/utils/env";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harli - Tracker Hari Libur Indonesia",
  description: "Cari tahu kapan liburan selanjutnya tanpa repot dengan Harli",
  keywords: [
    "Libur Indonesia",
    "Tanggal Merah",
    "Cuti Bersama",
    "Liburan",
    "Libur Nasional",
  ],
  openGraph: {
    title: "Harli - Tracker Hari Libur Indonesia",
    description: "Cari tahu kapan liburan selanjutnya tanpa repot dengan Harli",
    url: "https://harli.mgkusumaputra.me",
    siteName: "Next.js",
    images: [
      "https://res.cloudinary.com/dspkhqhkv/image/upload/v1695136986/Harli/OG_Banner.png",
    ],
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
      <script
        async
        src={ANALYTICS_SRC}
        data-website-id={WEBSITE_ID}
      ></script>
      <body className="bg-green-200">{children}</body>
    </html>
  );
}
