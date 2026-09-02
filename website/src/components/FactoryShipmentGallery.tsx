import Image from 'next/image';

const shipmentPhotos = {
  ready: {
    file: 'oem-socks-orders-ready-for-shipment-1.webp',
    alt: 'Sock order cartons stacked on blue pallets beside a pallet jack at the warehouse entrance',
    caption: 'Order cartons staged on pallets before dispatch.',
    width: 1536,
    height: 1024,
  },
  warehouse: {
    file: 'oem-socks-orders-ready-for-shipment-2.webp',
    alt: 'Wrapped pallets of labeled sock cartons arranged inside the dispatch warehouse',
    caption: 'Wrapped pallets of cartons in the dispatch warehouse.',
    width: 1536,
    height: 1024,
  },
  handling: {
    file: 'workers-loading-bulk-socks-orders.webp',
    alt: 'Forklift operator moving palletized cartons at the factory loading area',
    caption: 'Pallet handling at the factory loading area.',
    width: 1493,
    height: 1053,
  },
  loading: {
    file: 'custom-socks-container-loading.webp',
    alt: 'Forklift loading pallets of sock cartons onto a truck outside the factory',
    caption: 'Palletized cartons being loaded onto a truck for dispatch.',
    width: 1536,
    height: 1024,
  },
} as const;

type ShipmentPhoto = keyof typeof shipmentPhotos;

type FactoryShipmentGalleryProps = {
  photos?: readonly ShipmentPhoto[];
  title?: string;
  description?: string;
  className?: string;
};

/** General factory dispatch photographs, not evidence for a specific customer order. */
export default function FactoryShipmentGallery({
  photos = ['warehouse', 'loading'],
  title = 'From packed orders to factory dispatch',
  description = 'Factory dispatch reference: carton staging, pallet handling and truck loading. Packing details and the shipping plan are confirmed for each order.',
  className = '',
}: FactoryShipmentGalleryProps) {
  return (
    <div data-factory-shipment="gallery" className={`not-prose my-8 text-left ${className}`}>
      <h3 className="text-xl font-black leading-snug text-[#0c1713] md:text-2xl">{title}</h3>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">{description}</p>
      <div className={`mt-5 grid items-start gap-5 ${photos.length > 1 ? 'sm:grid-cols-2' : ''}`}>
        {photos.map((key) => {
          const photo = shipmentPhotos[key];
          return (
            <figure key={key} className="!m-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <Image
                src={`/assets/factory-shipment/${photo.file}`}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes={photos.length > 1 ? '(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 640px' : '(max-width: 1024px) 100vw, 900px'}
                loading="lazy"
                className="!m-0 block h-auto w-full"
              />
              <figcaption className="!m-0 border-t border-slate-100 px-4 py-3 text-xs leading-relaxed text-slate-600">{photo.caption}</figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
}

export function ProductShipmentSection() {
  return (
    <section className="bg-[#f7f8f6] px-5 py-10 md:px-8">
      <div className="mx-auto max-w-6xl">
        <FactoryShipmentGallery
          photos={['ready', 'loading']}
          title="Bulk-order packing and dispatch"
          description="General factory dispatch reference, not a shipment record for this specific sock style. Confirm size grouping, carton quantities, labeling and the delivery plan with your order."
        />
      </div>
    </section>
  );
}
