import Image from 'next/image';
import Link from 'next/link';
import EditorialPage, { editorialMetadata } from '@/components/EditorialPage';
import blue from '@/public/image/fleet/freightliner-m2-box-truck-cobalt.webp';
import white from '@/public/image/fleet/international-mv-box-truck-white.webp';
import rear from '@/public/image/fleet/box-truck-liftgate-rear.webp';
import quarter from '@/public/image/fleet/box-truck-liftgate-rear-quarter.webp';
import jack from '@/public/image/fleet/electric-pallet-jack-etrack.webp';
import front from '@/public/image/fleet/freightliner-m2-front.webp';
import door from '@/public/image/fleet/cab-door-usdot-mc.webp';

const title = 'Our Fleet: Box Trucks with Liftgate & Electric Pallet Jack';
const description = 'Real photos of the two Cargo Kings box trucks — a Freightliner M2 and an International MV — with rear liftgate, E-track and an onboard electric pallet jack.';
export const metadata = editorialMetadata(title, description, '/fleet');

const photos = [
  [blue, 'Cobalt blue Freightliner M2 box truck, Cargo Kings unit 2', 'Unit 2: Freightliner M2 with a full-height straight box.'],
  [white, 'White International MV box truck lettered Cargo Kings Inc, GVW 25,000', 'Unit 1: International MV, door-lettered GVW 25,000 lb.'],
  [rear, 'Rear of the Cargo Kings box truck with roll-up door and stowed liftgate', 'Roll-up rear door with a tuck-under liftgate.'],
  [quarter, 'Rear three-quarter view of the blue box truck showing the liftgate platform', 'Liftgate for receivers without a loading dock.'],
  [jack, 'Electric pallet jack inside the box truck, with E-track rails and load straps', 'Onboard electric pallet jack, E-track and straps travel with every load.'],
  [front, 'Front view of the Freightliner M2 box truck', 'Freightliner M2 front.'],
  [door, 'Cargo Kings cab door lettered with USDOT 3801387 and MC 1368401', 'USDOT 3801387 · MC 1368401, as listed with FMCSA.'],
];

export default function FleetPage() {
  return <EditorialPage title={title} description={description} path="/fleet">
    <div className="space-y-6">
      <p>These are unedited photos of our own two trucks, not stock images. Both are straight box trucks with a rear liftgate, and each carries an electric pallet jack, E-track rails and straps so freight can be moved and secured without help at the receiving end.</p>
      <div className="grid sm:grid-cols-2 gap-5">
        {photos.map(([src, alt, caption]) => <figure key={alt}>
          <Image src={src} alt={alt} sizes="(max-width: 640px) 100vw, 50vw" className="w-full h-auto rounded-xl" />
          <figcaption className="text-sm text-slate-600 mt-2">{caption}</figcaption>
        </figure>)}
      </div>
      <h2 className="text-2xl font-bold">Why the pallet jack matters</h2>
      <p>Many small receivers have no forklift. A liftgate brings the pallet to ground level, and the electric jack moves it from the gate to the door. Tell dispatch the pallet weight and the surface between the truck and the door so we can confirm the move is safe.</p>
      <p>Verify any carrier on the <a className="underline" href="https://safer.fmcsa.dot.gov/CompanySnapshot.aspx" rel="noopener">FMCSA company snapshot</a> before you tender. Read our <Link className="underline" href="/resources">freight guides</Link> to prepare your shipment.</p>
    </div>
  </EditorialPage>;
}
