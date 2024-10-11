import React from 'react';
import { Container } from './container';
import { Title } from './title';
import { cn } from '@/lib/utils';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Link from 'next/link';

interface Props {
  className?: string;
}

export const SignInPage: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex', className)}>
      <Container className="mx-4 m-auto">
        <Title text="Кош келдиңиз!" size="lg" className="text-center mt-24 mb-16 font-semibold" />
        <div className="w-[335px] px-9 h-[446px] shadow-[0px_0px_25px_1px_rgba(0,0,0,0.25)] rounded-xl pt-16 sm:w-[568px] ">
          <Title text="Кирүү" size="lg" className="text-center mb-7 font-medium" />
          <div className="max-w-[391px] m-auto">
            <div className="mb-7">
              <div className="font-semibold text-sm mb-1">Электрондук почта*</div>
              <Input
                className="shadow-[0px_3px_10px_0px_rgba(0,0,0,0.25)] border-none placeholder:text-[rgba(206,206,206)] rounded-[10px]"
                type="text"
                placeholder="turatalybaev@gmail.com"
              />
            </div>
            <div>
              <div className="font-semibold text-sm mb-1">Сыр сөз*</div>
              <Input
                className="shadow-[0px_3px_10px_0px_rgba(0,0,0,0.25)] border-none placeholder:text-[rgba(206,206,206)] rounded-[10px]"
                type="text"
                placeholder="turatalybaev@gmail.com"
              />
            </div>
            <div className="flex flex-col items-center justify-center mt-7">
              <Button className="bg-customColor px-9 text-mainColor font-semibold text-lg mb-4">
                Кирүү
              </Button>
              <Link className="border-b-[1px] text-[rgb(161,158,158)] m-0 p-0" href={'/singUp'}>
                Катталуу
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
