import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const font = Nunito({ subsets: ["latin"] });
const theme = "dark";

export const metadata: Metadata = {
  title: "Bookmark - Book Tracker",
};

export default function RootLayout({
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
