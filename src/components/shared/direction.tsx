import React from 'react';
import Image from 'next/image';
import { Container } from './container';
import { Title } from './title';
import { Button } from '../ui/button';

interface Props {
  className?: string;
}

interface Directions {
  id: number;
  title: string;
  imageUrl: string;
  bg: string;
}

const items: Directions[] = [
  {
    id: 1,
    title: 'Frontend',
    imageUrl: '/assets/image/image1.png',
    bg: 'BFA8C5',
  },
  {
    id: 2,
    title: 'Backend',
    imageUrl: '/assets/image/image2.png',
    bg: 'F8C0A7',
  },
  {
    id: 3,
    title: 'Flutter',
    imageUrl: '/assets/image/image3.png',
    bg: 'E8E497',
  },
];

export const Direction: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Container>
        <Title text="Биз жөнүндө" size="lg" className="text-center mt-24 mb-16 font-semibold" />
        <div className=" flex justify-between">
          {items.map((item) => (
            <div
              key={item.id}
              className="text-center w-[400px] h-[343px] rounded-xl bg-customColor">
              <div
                className=" w-[400px] rounded-xl"
                style={{ backgroundColor: `#${item.bg}`, height: '204px' }}>
                <Image
                  src={item.imageUrl}
                  width={200}
                  height={204}
                  alt={item.title}
                  className="m-auto rounded-lg"
                />
              </div>
              <Title text={item.title} size="md" className="mt-[27px] mb-4 text-white" />
              <Button className="bg-mainColor text-lg hover:bg-hoverColor">Кененирээк</Button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
