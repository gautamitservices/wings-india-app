import { Inter, Noto_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "WINGS CORPORATE SERVICES PVT. LTD.",
  description:
    "We help financial institutions resolve NPAs and recover funds through strategic legal notices, skip tracing, and court enforcement.",
  openGraph: {
    images: ["/about-us-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${notoSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
