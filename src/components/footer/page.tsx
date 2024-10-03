'use client';
import React from 'react';
import Image from 'next/image';
import Techjol from '../../assets/image/techjol-logo.png';
import InstaIcon from '../../assets/icon/instagram.svg';
import TeleIcon from '../../assets/icon/telegram.svg';
import WhatsappIcon from '../../assets/icon/whatsapp.svg';
import LocationIcon from '../../assets/icon/location.svg';
import EmailIcon from '../../assets/icon/email.svg';
import CallIcon from '../../assets/icon/call.svg';

interface Props {
  className?: string;
}

export const FooterPage: React.FC<Props> = () => {
  return (
    <div style={{ backgroundColor: 'var(--maincolor) ' }}>
      <div className={`max-w-screen-xl m-auto`}>
        <div className=" min-h-[313px] mx-11 sm:flex flex-wrap justify-between sm:mx-5">
          <div>
            <Image src={Techjol} alt={''} />
            <p className="max-w-[353px]">
              Разработка эффективного решения за максимально короткие сроки по самым доступным и
              конкурентным в странах СНГ ценам.
            </p>
          </div>
          <div className="mt-12">
            <h2 className="font-bold text-[18px]">Социалдык тармактар</h2>
            <div className=" flex my-5">
              <Image src={InstaIcon} alt="" />
              <h4 className="mx-3">instagram</h4>
            </div>
            <div className=" flex my-5">
              <Image src={TeleIcon} alt="" />
              <h4 className="mx-3">Telegram</h4>
            </div>
            <div className=" flex my-5">
              <Image src={WhatsappIcon} alt="" />
              <h4 className="mx-3">Whatsapp</h4>
            </div>
          </div>
          <div className="mt-12">
            <h2 className="font-bold text-[18px]">Байланыштар</h2>
            <div className=" flex my-5">
              <Image src={CallIcon} alt="" />
              <h4 className="mx-3">+996504188000</h4>
            </div>
          </div>
          <div className="mt-12">
            <h2 className="font-bold text-[18px]">Дарек</h2>
            <div className=" flex my-5">
              <Image src={LocationIcon} alt="" />
              <h4 className="mx-3">Максим Горький 97</h4>
            </div>
            <div className=" flex my-5">
              <Image src={EmailIcon} alt="" />
              <h4 className="mx-3">info@techjol.kg</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
