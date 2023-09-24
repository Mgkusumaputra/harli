import "./globals.css";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

const UmamiScript = dynamic(
  () =>
    import("@/components/umamiScript").then((m) => ({
      default: m.UmamiScript,
    })),
  { ssr: false }
);

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
      <body className="bg-green-200">
        {children}
        <UmamiScript />
      </body>
    </html>
  );
}
