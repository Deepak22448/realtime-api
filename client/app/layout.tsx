import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Realtime-api",
  description:
    "Tutorial on how to create a realtime api using nestjs,nextjs and socket.io ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-200 min-h-full min-w-full`}>
        {children}
      </body>
    </html>
  );
}
