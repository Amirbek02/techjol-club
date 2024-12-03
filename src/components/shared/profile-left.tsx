'use client';
import React from 'react';
import { Input } from '../ui/input';
import Image from 'next/image';
import { Title } from './title';
import { Container } from './container';
import { Button } from '../ui/button';

interface Props {
  className?: string;
}

interface Users {
  id: number;
  imageProfile: string;
  firstName: string;
  phoneNumber: string;
  email: string;
}
const items: Users[] = [
  {
    id: 1,
    imageProfile:
      'https://images-techjol.s3.amazonaws.com/1730694813707Снимок экрана_20230116_202834.png',
    firstName: 'Amiraev Amirbek',
    phoneNumber: '+996777380432',
    email: 'amirbek@gmail.com',
  },
];

export const ProfileLeft: React.FC<Props> = ({ className }) => {
  const [inputValues, setInputValues] = React.useState({
    firstName: items[0].firstName,
    phoneNumber: items[0].phoneNumber,
  });

  const handleValue = (field: string, value: string) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

  return (
    <div className={className}>
      <Container className="m-4">
        <Title className="text-center" text="Профиль" size="lg" />
        {items.map((item) => (
          <div key={item.id}>
            <div className="flex items-end mt-9">
              <div className="mr-8">
                <Title
                  className="font-bold text-[#4D4B4B] mb-5"
                  text="Колдонуучунун сүрөтү"
                  size="sm"
                />
                <Image
                  className="rounded-full bg-cover"
                  src={item.imageProfile}
                  width={150}
                  height={150}
                  alt="Profile"
                />
              </div>
              <div>
                <p className="mb-4 text-[#4D4B4B]">PNG, JPG 225x280 ден жогору болбогон 10 мб.</p>
                <label htmlFor="fileUpload">
                  <div
                    className="flex items-center justify-center border border-[#6C6C73] border-1 rounded-lg w-[219px] h-[54px] shadow-inner-custom"
                    style={{ boxShadow: 'inset 0px 4px 6px rgba(0, 0, 0, 0.2)' }}>
                    <Image src="assets/image/img.svg" alt="" width={30} height={27} />
                    <input className="hidden" type="file" id="fileUpload" />
                    <p className="text-[#4D4B4B] ml-4">Cүрөттү өзгөртүү</p>
                  </div>
                </label>
              </div>
            </div>
            <div className="mb-7 mt-24">
              <div className="font-semibold text-sm mb-1">Аты-жөнү*</div>
              <Input
                className=" border border-[#6C6C73] border-1 rounded-lg max-w-[480px] h-[54px] shadow-inner-custom"
                style={{ boxShadow: 'inset 0px 4px 6px rgba(0, 0, 0, 0.2)' }}
                type="text"
                value={inputValues.firstName}
                onChange={(e) => handleValue('firstName', e.target.value)}
                placeholder=""
              />
            </div>
            <div className="mb-7">
              <div className="font-semibold text-sm mb-1">Телефон номер*</div>
              <div className="flex items-center">
                <Image src="assets/icon/phone.svg" alt="phone" width={28} height={39} />
                <Input
                  className="ml-7 border border-[#6C6C73] border-1 rounded-lg max-w-[420px] h-[54px] shadow-inner-custom"
                  style={{ boxShadow: 'inset 0px 4px 6px rgba(0, 0, 0, 0.2)' }}
                  type="text"
                  value={inputValues.phoneNumber}
                  onChange={(e) => handleValue('phoneNumber', e.target.value)}
                  placeholder=""
                />
              </div>
            </div>
          </div>
        ))}
        <Button className="font-bold text-[18px] py-4 px-9 text-[#CDA407D4] bg-[--maincolor] mt-8">
          Өзгөртүү
        </Button>
      </Container>
    </div>
  );
};
