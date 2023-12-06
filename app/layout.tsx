import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import GoogleAnalyticsScript from "./GoogleAnalyticsScript";
import CookieComponent from "./components/CookieComponent";
import Footer from "./components/Footer";
import HydrationZustand from "./components/HydrationZustand";
import Navbar from "./components/Navbar";
import ScrollButtonTop from "./components/ScrollButtonTop";
import "./globals.css";
import "./normalize.css";

const manrope = Manrope({
  weight: ["200", "300", "400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lavastone | Váš partner pro interiérový design",
  description:
    "Vytvoříme design a provedení, které sofistikovaně doplní váš interiér nebo exteriér.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cz">
      <GoogleAnalyticsScript />
      <body className={manrope.className}>
        <HydrationZustand>
          <ScrollButtonTop />
          <Navbar />
          {children}
          <Footer />
        </HydrationZustand>
        <CookieComponent />
      </body>
    </html>
  );
}
