import { ImageCategory } from '../components/images';

interface Filter {
  readonly id: string;
  readonly key: ImageCategory;
  readonly label: string;
}

export const filters: Filter[] = [
  {
    id: 'all',
    key: ImageCategory.NONE,
    label: 'All'
  },
  {
    id: 'street',
    key: ImageCategory.STREET,
    label: 'Street'
  },
  {
    id: 'headshot',
    key: ImageCategory.HEADSHOT,
    label: 'Headshot'
  }
];
