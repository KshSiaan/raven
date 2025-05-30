import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/core/theme-provider";
export const metadata: Metadata = {
  title: "Raven",
  description: "Portfolio - Raven",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
