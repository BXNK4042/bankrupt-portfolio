import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from './components/nav'
import Footer from './components/footer'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bankrupt-Portfolio",
  description: "Portfolio created by bankrupt",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="max-w-110 mx-auto">
          <Nav/>
          {children}
          <Footer />          
        </div>
      </body>
    </html>
  );
}
