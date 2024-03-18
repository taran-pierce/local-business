import {
  Inter,
} from "next/font/google";

import SiteWrapper from "../components/SiteWrapper";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Buckshot Bar & Grill",
  description: "Bar and grill",
  authors: [{ name: 'Taran Pierce' }],
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteWrapper>
          <Header />
          {children}
          <Footer />
        </SiteWrapper>
      </body>
    </html>
  );
}
