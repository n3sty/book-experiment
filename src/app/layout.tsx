import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const font = Rubik({ subsets: ["latin"] });
const theme = "dark";

const defaultUrl = process.env.VERCEL_URL 
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000"

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Bookmark - Book Tracker",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme={theme} lang="en">
      <body className={font.className + " "}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
