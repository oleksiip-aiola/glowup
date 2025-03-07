import type { Metadata } from "next";
import "./globals.css";
import { Fugaz_One, Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "GlowUp",
  description: "Stay healthy with GlowUp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <h1 className={`text-base sm:text-lg textGradient ${fugaz.className}`}>
        GlowUp
      </h1>
      <div className="flex items-center justify-between">Placeholder</div>
    </header>
  );
  const footer = (
    <footer className="p-4 sm:p-8 grid place-items-center">
      <p className={`text-indigo-500 ${fugaz.className}`}>Created with</p>
    </footer>
  );
  return (
    <html lang="en">
      <body
        className={`w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800 ${openSans.className}`}
      >
        {header}

        {children}
        {footer}
      </body>
    </html>
  );
}
