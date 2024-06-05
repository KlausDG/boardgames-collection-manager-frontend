import "primereact/resources/primereact.min.css";
import "./globals.css";

// import "primeicons/primeicons.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PrimeReactProvider } from "primereact/api";

import { ClerkProvider } from "@clerk/nextjs";
import { CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";

import Layout from "../components/layout/layout";
import Providers from "./providers";
import darkTheme from "./theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <AppRouterCacheProvider>
            <ThemeProvider theme={darkTheme}>
              <PrimeReactProvider>
                <CssBaseline />
                <Providers>
                  <Layout>{children}</Layout>
                </Providers>
              </PrimeReactProvider>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
