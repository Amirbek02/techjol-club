import React from 'react';
import { Container } from './container';
import { Title } from './title';
import { cn } from '@/lib/utils';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Button } from '../ui/button';
import Link from 'next/link';

interface Props {
  className?: string;
}

export const SignUpSecond: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex', className)}>
      <Container className="mx-4 m-auto">
        <Title text="Кош келдиңиз!" size="lg" className="text-center mt-24 mb-16 font-semibold" />
        <div className="w-[335px] px-9 h-[450px] shadow-[0px_0px_25px_1px_rgba(0,0,0,0.25)] rounded-xl pt-16 sm:w-[568px] ">
          <Title text="Катталуу" size="lg" className="text-center mb-7 font-medium" />
          <div className="max-w-[391px] m-auto">
            <div className="mb-7">
              <div className="font-semibold text-sm mb-1">Толук аты жөнүңүз*</div>
              <Input
                className="shadow-[0px_3px_10px_0px_rgba(0,0,0,0.25)] border-none placeholder:text-[rgba(206,206,206)] rounded-[10px]"
                type="text"
                placeholder="Турат Алыбаев"
              />
            </div>
            <div className="mb-7">
              <div className="font-semibold text-sm mb-1">Толук аты жөнүңүз*</div>
              <Select>
                <SelectTrigger className="shadow-[0px_3px_10px_0px_rgba(0,0,0,0.25)] border-none text-[rgba(206,206,206)] rounded-[10px]">
                  <SelectValue className="text-[rgba(206,206,206)]" placeholder="Тандоо" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Frontend">Frontend</SelectItem>
                  <SelectItem value="Flutter">Flutter</SelectItem>
                  <SelectItem value="Backend">Backend</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col items-center justify-center mt-7">
              <Button className="bg-customColor px-9 text-mainColor font-semibold text-lg mb-4">
                Катталуу
              </Button>
              <Link className="border-b-[1px] text-[rgb(161,158,158)] m-0 p-0" href={'/singIn'}>
                Кирүү
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
