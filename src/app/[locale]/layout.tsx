import type { Metadata } from "next";
import { useParams } from "next/navigation";
import { I18nProviderClient } from "../../../locales/client";
import "../globals.css";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

export const metadata: Metadata = {
  title: "zoe's portfolio",
  description: "zoe's portfolio",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html className="snap-mandatory scroll-smooth" lang={locale}>
      <I18nProviderClient locale={locale}>
        <body>{children}</body>
      </I18nProviderClient>
    </html>
  );
}
