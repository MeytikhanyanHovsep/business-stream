import "./globals.css";
import Components from "@/components";
import { getSiteSettings } from "@/store/getSiteSettings";
import { Metadata } from "next";
export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();

  return {
    title: settings?.title || "Default Title",
    description: settings?.description || "Default Description",
    icons: {
      icon: settings?.faviconUrl || "/favicon.ico",
    },
    openGraph: {
      title: settings?.title,
      description: settings?.description,
      images: settings?.ogImageUrl ? [{ url: settings.ogImageUrl }] : [],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();
  return (
    <html
      lang="ru"
      className={`min-h-max font-sans antialiased max-w-screen overflow-x-hidden`}
    >
      <head>
        {settings?.headScripts && (
          <script
            id="head-scripts"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: settings.headScripts }}
          />
        )}
      </head>
      <body className="bg-black font-sans min-h-full text-white ">
        {settings?.bodyScripts && (
          <div
            id="body-scripts-container"
            style={{ display: "none" }}
            dangerouslySetInnerHTML={{ __html: settings.bodyScripts }}
          />
        )}
        <Components>{children}</Components>
      </body>
    </html>
  );
}
