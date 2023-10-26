import { NextUIProvider } from "@nextui-org/react";
import Chat from "./Components/Chat";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Providers } from "./providers";

const poppins = Poppins({ subsets: ["latin"], weight: "200" });

export const metadata = {
  title: "Artificial Books",
  description: "Bookstore with an AI librarian",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={poppins.className}>
        <Providers>
          {children}
          <Chat />
        </Providers>
      </body>
    </html>
  );
}
