import "~/styles/globals.css";
import "cal-sans";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import { Fog, GridContainer } from "~/components/madeup/grid-background";
import { Cursor } from "~/components/madeup/cursor";
import { ThemeProvider } from "~/components/theme-provider";

import { Footer } from "~/components/madeup/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Asthra 8.0",
  description: "Developed by SJCET Web Team",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <GridContainer> */}
        {/* <Fog /> */}
        <Cursor />
        {/* <Toast /> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {/* <Toaster richColors={true} position="top-center" /> */}
          <TRPCReactProvider>
            {children}
            <Footer/>
          </TRPCReactProvider>
        </ThemeProvider>
        {/* </GridContainer> */}
      </body>
    </html>
  );
}
