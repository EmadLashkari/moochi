// next
import type { Metadata } from "next";
import { yekan, geistSans, geistMono } from "@/styles/fonts";
// mui + styles
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import RTLProvider from "@/styles/rtlProvider";
import { ThemeProvider } from "@/utils/context/ThemeContext";
import { CssBaseline } from "@mui/material";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Hercut",
  description: "Hercut is a modern web app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${yekan.variable} ${geistSans.variable} ${geistMono.variable}`}
      >
        <AppRouterCacheProvider>
          <ThemeProvider>
            <CssBaseline />
            <RTLProvider>{children}</RTLProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
