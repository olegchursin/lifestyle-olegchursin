import { Image } from 'react-grid-gallery';

export enum ImageCategory {
  NONE = '',
  STREET = 'street',
  HEADSHOT = 'headshot'
}

export interface CustomImage extends Image {
  original: string;
  category?: ImageCategory;
}

export const images: CustomImage[] = [
  {
    src: 'https://live.staticflickr.com/65535/52403019474_be47756e14_w.jpg',
    original:
      'https://live.staticflickr.com/65535/52403019474_af67d31822_h.jpg',
    width: 400,
    height: 267,
    caption: 'Oleg Chursin - NYC Lifestyle Photography',
    category: ImageCategory.STREET
  },
  {
    src: 'https://live.staticflickr.com/65535/52403235673_587219e73a_w.jpg',
    original:
      'https://live.staticflickr.com/65535/52403235673_afa7237cf7_k.jpg',
    width: 270,
    height: 400,
    caption: 'Oleg Chursin - NYC Lifestyle Photography',
    category: ImageCategory.STREET
  },

  {
    src: 'https://live.staticflickr.com/65535/52402223002_93b07d04de_w.jpg',
    original:
      'https://live.staticflickr.com/65535/52402223002_b0e7f77a6f_h.jpg',
    width: 400,
    height: 267,
    caption: 'Oleg Chursin - NYC Lifestyle Photography',
    category: ImageCategory.STREET
  },
  {
    src: 'https://live.staticflickr.com/65535/52403019209_5fbe7f5fc6_w.jpg',
    original:
      'https://live.staticflickr.com/65535/52403019209_6c4b009851_h.jpg',
    width: 400,
    height: 267,
    caption: 'Oleg Chursin - NYC Lifestyle Photography',
    category: ImageCategory.HEADSHOT
  },
  {
    src: 'https://live.staticflickr.com/65535/52402736751_27d3f81b6f_w.jpg',
    original:
      'https://live.staticflickr.com/65535/52402736751_5e066c5aee_h.jpg',
    width: 267,
    height: 400,
    caption: 'Oleg Chursin - NYC Lifestyle Photography',
    category: ImageCategory.STREET
  },
  {
    src: 'https://live.staticflickr.com/65535/52403235438_41a16bbef2.jpg',
    original:
      'https://live.staticflickr.com/65535/52403235438_e1b58a837e_h.jpg',
    width: 400,
    height: 500,
    caption: 'Oleg Chursin - NYC Lifestyle Photography',
    category: ImageCategory.HEADSHOT
  },
  {
    src: 'https://live.staticflickr.com/65535/52402736636_5e94673038_w.jpg',
    original:
      'https://live.staticflickr.com/65535/52402736636_ff4f8cca14_h.jpg',
    width: 400,
    height: 267,
    caption: 'Oleg Chursin - NYC Lifestyle Photography',
    category: ImageCategory.HEADSHOT
  },
  {
    src: 'https://live.staticflickr.com/65535/52402222692_0348eddfd7_w.jpg',
    original:
      'https://live.staticflickr.com/65535/52402222692_73d4e50c96_h.jpg',
    width: 267,
    height: 400,
    caption: 'Oleg Chursin - NYC Lifestyle Photography',
    category: ImageCategory.STREET
  },
  {
    src: 'https://live.staticflickr.com/65535/52402736241_d5aac82721_w.jpg',
    original:
      'https://live.staticflickr.com/65535/52402736241_241d01dd17_k.jpg',
    width: 260,
    height: 400,
    caption: 'Oleg Chursin - NYC Lifestyle Photography',
    category: ImageCategory.STREET
  },
  {
    src: 'https://live.staticflickr.com/65535/52403235948_74e087462b_w.jpg',
    original:
      'https://live.staticflickr.com/65535/52403235948_09aced6e67_h.jpg',
    width: 267,
    height: 400,
    caption: 'Oleg Chursin - NYC Lifestyle Photography',
    category: ImageCategory.STREET
  },

  {
    src: 'https://live.staticflickr.com/65535/52403235333_656b2ee4dc.jpg',
    original:
      'https://live.staticflickr.com/65535/52403235333_f0bdd55325_h.jpg',
    width: 400,
    height: 500,
    caption: 'Oleg Chursin - NYC Lifestyle Photography',
    category: ImageCategory.HEADSHOT
  },
  {
    src: 'https://live.staticflickr.com/65535/52403019199_1062055a40_w.jpg',
    original:
      'https://live.staticflickr.com/65535/52403019199_82c8b1fc56_h.jpg',
    width: 400,
    height: 267,
    caption: 'Oleg Chursin - NYC Lifestyle Photography',
    category: ImageCategory.HEADSHOT
  },
  {
    src: 'https://live.staticflickr.com/65535/52403235368_e44ce12dfd_w.jpg',
    original:
      'https://live.staticflickr.com/65535/52403235368_a46aef1214_h.jpg',
    width: 267,
    height: 400,
    caption: 'Oleg Chursin - NYC Lifestyle Photography',
    category: ImageCategory.HEADSHOT
  },
  {
    src: 'https://live.staticflickr.com/65535/52403235813_9fa328abe5_w.jpg',
    original:
      'https://live.staticflickr.com/65535/52403235813_31a747db06_h.jpg',
    width: 400,
    height: 267,
    caption: 'Oleg Chursin - NYC Lifestyle Photography',
    category: ImageCategory.STREET
  }
];
