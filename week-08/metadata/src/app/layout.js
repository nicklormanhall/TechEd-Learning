import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nick",
  description: "A simple blog built with Next.js",
  openGraph: {
    title: "Next.js Blog",
    description: "A simple blog built with Next.js",
    type: "website",
    url: "https://next-comments-postgres.vercel.app/",
    image: "https://next-comments-postgres.vercel.app/og-image.png", // add an appropriate image to your public folder
  },
};

export default function RootLayout({ children }) {
  return (
    <body className={inter.className}>
      <header>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/posts">Posts</Link>
        </nav>
      </header>
      {children}
    </body>
  );
}
