import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AURC",
  description: "Adani University Robotics Club",
  icons: 'AURC_logo.png',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
