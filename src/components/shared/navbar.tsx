import React from 'react';
import { Container } from './container';
import Image from 'next/image';

interface Props {
  className?: string;
}

export const Navbar: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Container className="w-[500px] h-screen bg-[#F1F1F2]">
        <div className="shadow-[0px_3px_10px_0px_rgba(0,0,0,0.25)] bg-[#7881A6] border-none placeholder:text-[#7881A6] flex rounded-[10px]">
          <Image src="assets/icon/profile.svg" alt="profile" width={22} height={22} />
          <p>Профиль</p>
        </div>
        <div className="shadow-[0px_3px_10px_0px_rgba(0,0,0,0.25)] border-none placeholder:text-[#7881A6] flex rounded-[10px]">
          <Image src="assets/icon/pay.svg" alt="profile" width={22} height={20} />
          <p>Төлөм</p>
        </div>
      </Container>
    </div>
  );
};
