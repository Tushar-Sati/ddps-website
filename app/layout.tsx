import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    metadataBase: new URL('https://www.digitaldisplaypanelsolution.com'),
    title: {
        default: "LED TV Repair in Ghaziabad | Display, Panel & Motherboard Repair – Digital Display Panel Solution",
        template: "%s | DDPS TV Repair",
    },
    description: "Professional LED TV repair in Ghaziabad including display panel replacement, screen repair and motherboard repair. Doorstep TV service in Lohia Nagar, Indirapuram, Vaishali and nearby areas.",
    keywords: ["TV Repair Ghaziabad", "LED TV display repair", "Panel replacement", "Motherboard repair", "Screen repair", "TV service at home"],
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
    "telephone": "+919810845788",
    "url": "https://www.digitaldisplaypanelsolution.com",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "SAINI COMPOUND, B-59A, near WATER TANK, Block G, Lohia Nagar",
        "addressLocality": "Ghaziabad",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "201001",
        "addressCountry": "IN"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "189"
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
