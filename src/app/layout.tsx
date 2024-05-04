import type { Metadata } from "next";
import { Bebas_Neue, Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"]
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas"
})

export const metadata: Metadata = {
  title: "PaoloChMProjects",
  description: `Soy un desarrollo web, que trabaja con javascript, python y proximamente go. 
  Me apasiona el mundo del desarrollo de software`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${roboto.className} ${bebas.variable} bg-black text-white`}>{children}</body>
    </html>
  );
}
