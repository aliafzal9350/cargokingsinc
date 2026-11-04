export const SITE_URL = 'https://www.cargokingsinc.com';
export const BUSINESS = {
  name: 'Cargo Kings Inc', shortName: 'Cargo Kings', owner: 'Gaika Headley',
  phoneDisplay: '(929) 503-7626', phoneHref: 'tel:9295037626', phone: '+1-929-503-7626',
  email: 'cargokings718@gmail.com', usdot: '3801397', mc: '1368401',
};
export const toJsonLd = data => JSON.stringify(data).replace(/</g, '\\u003c');
export function pageMetadata(title, description, path) {
  return { title: { absolute: `${title} | Cargo Kings` }, description, alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: BUSINESS.name, locale: 'en_US', type: 'website', images: [{ url: '/image/logo-full-retina.png', alt: BUSINESS.name }] },
    twitter: { card: 'summary_large_image', title, description, images: ['/image/logo-full-retina.png'] },
  };
}
