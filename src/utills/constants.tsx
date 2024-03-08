import { v4 as uuidv4 } from 'uuid';

export const DEFAULT_SOCIAL_MEDIA = [
  {
    id: uuidv4(),
    title: 'Instagram',
    link: 'https://www.instagram.com/athena_and_peach/',
  },
  {
    id: uuidv4(),
    title: 'TikTok',
    link: 'https://www.tiktok.com/@athena_and_peach',
  },
];

export const pets = [
  {
    name: 'Peach',
    images: [
      'images/peach01.jpg',
      'images/peach02.jpg',
      'images/peach03.jpg',
      'images/peach04.jpg',
      'images/peach05.jpg',
    ],
  },
  {
    name: 'Athena',
    images: [
      'images/athena01.jpg',
      'images/athena02.jpg',
      'images/athena03.jpg',
      'images/athena04.jpg',
      'images/athena05.jpg',
    ],
  },
];

export const onClick = (e: any) => {
  e.preventDefault();
};
