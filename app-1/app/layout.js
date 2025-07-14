import "./globals.css";
import {Poppins} from "next/font/google";
import Header from "./components/Header";

const poppins = Poppins({
  subsets: ['latin'],
  weight:['400', '700'],
})

export const metadata = {
  title: "My Next.js App",
  description: "My Next.js application with a custom layout",
  keywords: "nextjs, app, layout, example",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
