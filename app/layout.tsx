import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["400", "500", "600"],
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LeftLane Marketing — The Giveaway Growth Engine",
  description:
    "LeftLane Marketing is the industry's most proven giveaway growth consultancy. $250M+ generated. 400+ giveaways. Zero clients lost.",
  openGraph: {
    title: "LeftLane Marketing — The Giveaway Growth Engine",
    description:
      "The industry's leading vehicle giveaway consultancy. $250M+ generated. 400+ giveaways. 0 clients lost.",
    url: "https://leftlanemarketingllc.com",
    type: "website",
    siteName: "LeftLane Marketing",
    images: [
      {
        url: "https://leftlanemarketingllc.com/images/leftlane-logo.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LeftLane Marketing — The Giveaway Growth Engine",
    description:
      "The industry's leading vehicle giveaway consultancy. $250M+ generated. 400+ giveaways. 0 clients lost.",
    images: ["https://leftlanemarketingllc.com/images/leftlane-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${dmSans.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "LeftLane Marketing LLC",
              "url": "https://leftlanemarketingllc.com",
              "logo": "https://leftlanemarketingllc.com/images/leftlane-logo.png",
              "description": "The industry's leading vehicle giveaway marketing consultancy. $250M+ generated for clients across 400+ giveaways.",
              "foundingDate": "2015",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Charleston",
                "addressRegion": "SC",
                "addressCountry": "US"
              },
              "areaServed": ["US", "CA"],
              "knowsAbout": ["giveaway marketing", "vehicle giveaways", "sweepstakes marketing", "automotive marketing"],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Giveaway Growth Engine",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Giveaway Growth Engine",
                      "description": "Fully turnkey vehicle giveaway system including strategy, ads, fulfillment, and winner delivery."
                    }
                  }
                ]
              }
            }),
          }}
        />
      </head>
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KQXC6979YB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KQXC6979YB');
          `}
        </Script>
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
