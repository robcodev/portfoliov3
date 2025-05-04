

import type { Metadata } from "next";

import "./globals.css";
import './emblaStyles.css'
import {Anton, Courier_Prime, Handjet} from "next/font/google";

const antonReg = Anton({
    weight: '400',
    variable: '--font-anton-regular',
    subsets: ['latin']
});


const handJet = Handjet({
    variable: '--font-handjet-regular',
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${handJet.variable} ${antonReg.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
