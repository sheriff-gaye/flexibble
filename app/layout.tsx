import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Flexibble",
  description: "Develloper Projects"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav/>
        <main>{children}</main>
        <Footer/> 
      </body>
    </html>
  );
}
