import { cn } from "@/lib/utils";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "АНО «Центр медицинских компетенций»",
  description:
    "АНО «Центр медицинских компетенций» — образовательная и экспертная площадка для врачей: конференции, школы, клинические исследования и методические материалы в Екатеринбурге и регионах.",
  keywords: [
    "ЦМК",
    "центр медицинских компетенций",
    "медицинское образование",
    "врачи",
    "Екатеринбург",
    "конференции",
    "НМО",
    "клинические исследования",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          GeistSans.variable,
          GeistMono.variable
        )}
        style={{
          ["--font-display" as never]: `var(${GeistSans.variable})`,
          ["--font-body" as never]: `var(${GeistSans.variable})`,
        }}
      >
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
