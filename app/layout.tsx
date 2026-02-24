import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    metadataBase: new URL('https://ddps-tvrepair.com'), // Replace with final production URL
    title: {
        default: "LED TV Repair in Ghaziabad | Lohia Nagar | DDPS",
        template: "%s | DDPS TV Repair",
    },
    description: "Top-rated LED TV repair in Ghaziabad and Lohia Nagar. Digital Display Panel Solution (DDPS) offers reliable, guaranteed TV panel replacements and 24/7 emergency repairs.",
    keywords: ["TV Repair Ghaziabad", "LED TV Repair Lohia Nagar", "Display Panel Replacement", "TV Screen Repair", "Emergency TV Repair NCR"],
    authors: [{ name: "DDPS" }],
    creator: "Digital Display Panel Solution",
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "/",
        siteName: "Digital Display Panel Solution",
        title: "LED TV Repair in Ghaziabad | DDPS",
        description: "Expert LED TV & Display Panel Repair Services in Ghaziabad. Same-day service and 100% genuine parts.",
        images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'DDPS LED TV Repair' }],
    },
    twitter: {
        card: "summary_large_image",
        title: "LED TV Repair in Ghaziabad | DDPS",
        description: "Expert LED TV & Display Panel Repair Services. Book online for fast repair.",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Digital Display Panel Solution",
    "telephone": "+91 9810845788",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "SAINI COMPOUND, B-59A, Near Water Tank, Block G, Lohia Nagar",
        "addressLocality": "Ghaziabad",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "201001",
        "addressCountry": "IN"
    },
    "areaServed": "Ghaziabad, NCR",
    "sameAs": [
        "https://wa.me/919810845788"
    ]
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} font-sans bg-background text-primary antialiased`}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                {children}
            </body>
        </html>
    );
}
