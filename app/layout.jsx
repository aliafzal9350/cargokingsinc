import GoogleTag from '@/components/GoogleTag';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import { ADSENSE_CLIENT, BUSINESS, SITE_URL, toJsonLd } from '@/lib/site';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  ...(ADSENSE_CLIENT && { other: { 'google-adsense-account': ADSENSE_CLIENT } }),
  title: 'Cargo Kings Inc | Expedited Box Truck Freight',
  description: 'Expedited 26ft dock-high box truck freight with liftgate and electric pallet jack. Request availability and a rate: (929) 503-7626.',
  icons: {
    icon: '/image/ssstik.io_1788346269178.webp',
    shortcut: '/image/ssstik.io_1788346269178.webp',
    apple: '/image/ssstik.io_1788346269178.webp',
  },
  keywords: [
    'Cargo Kings Inc',
    'Expedited Freight',
    'Box Truck Logistics',
    'TSA Certified Carrier',
    'TWIC Clearance Trucking',
    'Dock High Freight',
    'Electric Pallet Jack',
    'Gaika Headley',
    'MC 1368401',
    'USDOT 3801397'
  ],
  authors: [{ name: 'Gaika Headley', url: 'https://cargokingsinc.com' }],
  openGraph: {
    title: 'Cargo Kings Inc | Expedited Logistics & 3D Telemetry',
    description: 'Supreme Expedited Freight Power. TSA Change 10 Certified & TWIC Card Approved. 2 Dedicated Power Units.',
    url: '/',
    siteName: 'Cargo Kings Inc',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/image/logo-full-retina.png', alt: BUSINESS.name }],
  },
  twitter: { card: 'summary_large_image', images: ['/image/logo-full-retina.png'] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><GoogleTag /></head>
      <body className="bg-white text-slate-900 selection:bg-red-600 selection:text-white min-h-screen antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd({ '@context': 'https://schema.org', '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: BUSINESS.name, url: `${SITE_URL}/`, logo: `${SITE_URL}/image/logo-full-retina.png`, telephone: BUSINESS.phone, email: BUSINESS.email, founder: { '@type': 'Person', name: BUSINESS.owner }, identifier: [{ '@type': 'PropertyValue', propertyID: 'USDOT', value: BUSINESS.usdot }, { '@type': 'PropertyValue', propertyID: 'MC', value: BUSINESS.mc }], sameAs: ['https://www.instagram.com/cargokingsinc/', 'https://www.tiktok.com/@cargokingsinc'] }) }} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
