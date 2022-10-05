import { FC, useState } from 'react';
import { Gallery } from 'react-grid-gallery';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import GalleryFilter from './gallery-filter';
import { CustomImage, ImageCategory, images as sourceImages } from './images';

const GallerySection: FC = () => {
  const [activeFilter, setActiveFilter] = useState(ImageCategory.NONE);
  const [index, setIndex] = useState(-1);

  const filterImages = (filterKey: string): CustomImage[] => {
    if (filterKey) {
      return sourceImages.filter(img => img.category === filterKey);
    }
    return sourceImages;
  };
  const images = filterImages(activeFilter);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index: number) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <div className="pt-6 px-6 md:px-0">
      <GalleryFilter activeFilter={activeFilter} setFilter={setActiveFilter} />
      <Gallery
        images={images}
        rowHeight={350}
        onClick={handleClick}
        enableImageSelection={false}
      />
      {!!currentImage && (
        <Lightbox
          mainSrc={currentImage.original}
          imageTitle={currentImage.caption}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage?.original}
          nextSrcThumbnail={nextImage?.src}
          prevSrc={prevImage?.original}
          prevSrcThumbnail={prevImage?.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </div>
  );
};

export default GallerySection;
