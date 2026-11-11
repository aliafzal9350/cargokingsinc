import Link from 'next/link';
import EditorialPage, { editorialMetadata } from '@/components/EditorialPage';
import { RESOURCES } from '@/lib/resources';
export const metadata = editorialMetadata('Freight Planning Guides', 'Freight planning guides from Cargo Kings: electric pallet jack delivery checks and what dispatch needs for an accurate expedited freight quote.', '/resources');
export default function Resources() {
  return <EditorialPage title="Freight planning guides" description={metadata.description} path="/resources">{RESOURCES.map(r => <section className="lp-section" key={r.slug}><h2><Link href={`/resources/${r.slug}`}>{r.title}</Link></h2><p>{r.description}</p><Link href={`/resources/${r.slug}`}>Read guide →</Link></section>)}</EditorialPage>;
}
