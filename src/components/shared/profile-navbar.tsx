import React from 'react';
import { Container } from './container';
import Image from 'next/image';

interface Props {
  className?: string;
}

export const Navbar: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Container className="max-w-[500px] h-screen bg-[#F1F1F2] pt-32 px-8 lg:px-16 lg:w-[500px]">
        <div className="max-w-full shadow-[0px_3px_10px_0px_rgba(0,0,0,0.25)] bg-[#7881A6] border-none placeholder:text-[#7881A6] flex rounded-[10px] px-6 py-3 mb-8">
          <Image src="assets/icon/profile.svg" alt="profile" width={22} height={22} />
          <p className="px-4">Профиль</p>
        </div>
        <div className=" shadow-[0px_3px_10px_0px_rgba(0,0,0,0.25)] border-none placeholder:text-[#7881A6] flex rounded-[10px] px-6 py-3">
          <Image src="assets/icon/pay.svg" alt="profile" width={22} height={20} />
          <p className="pl-4">Төлөм</p>
        </div>
      </Container>
    </div>
  );
};
