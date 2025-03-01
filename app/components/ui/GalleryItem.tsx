import Image from 'next/image';
import { GalleryItem as GalleryItemType } from '../../data/gallery';

interface GalleryItemProps {
  item: GalleryItemType;
}

const GalleryItem = ({ item }: GalleryItemProps) => {
  return (
    <div className="gallery-item">
      <div className="relative h-64 w-full">
        <Image
          src={item.image}
          alt={item.title}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
          <div className="text-white text-center p-4">
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="capitalize">{item.category}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;