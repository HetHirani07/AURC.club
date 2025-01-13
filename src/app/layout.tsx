import type { Metadata } from "next";
import "./globals.css";
import ClientOnly from "./clientOnly";

export const metadata: Metadata = {
  title: "AURC",
  description: "Adani University Robotics Club",
  icons: 'AURC_logo.png',
};

const ID = 'G-3D3QCS21ZB';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ClientOnly>
        {children}
        </ClientOnly>
      </body>
    </html>
  )
}
