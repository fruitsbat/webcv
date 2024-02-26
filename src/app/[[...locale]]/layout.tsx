import type { Metadata } from "next";
import { I18nProviderClient } from "../../../locales/client";
import "../globals.css";

export async function generateStaticParams() {
  return [{ locale: ["en"] }, { locale: ["de"] }, { locale: [] }];
}

export const metadata: Metadata = {
  title: "zoe's portfolio",
  description: "zoe's portfolio",
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string[] };
}) {
  // return the language selector of no locale can be found
  if (!locale) {
    return (
      <html>
        <body>
          <div>funny kitty moment</div>
        </body>
      </html>
    );
  }

  // return the regular page if there is a locale selected
  return (
    <html lang={locale.at(-1)}>
      <I18nProviderClient locale={locale.at(-1)!}>
        <body>{children}</body>
      </I18nProviderClient>
    </html>
  );
}
