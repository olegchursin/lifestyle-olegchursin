import { Button } from 'flowbite-react';
import { FC } from 'react';
import { filters } from '../utils/gallery-filter';
import { ImageCategory } from './images';

interface GalleryFilterProps {
  readonly activeFilter: ImageCategory;
  readonly setFilter: (filterKey: ImageCategory) => void;
}

const GalleryFilter: FC<GalleryFilterProps> = ({ activeFilter, setFilter }) => {
  return (
    <div className="my-12 flex place-content-center">
      <div className="flex gap-6">
        {filters.map(filter => {
          return (
            <Button
              key={filter.id}
              outline={activeFilter !== filter.key}
              gradientDuoTone="purpleToPink"
              onClick={() => setFilter(filter.key)}
            >
              {filter.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default GalleryFilter;
