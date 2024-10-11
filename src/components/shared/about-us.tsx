import React from 'react';
import { Container } from './container';
import { Title } from './title';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import PeopleGroup from '../../assets/icon/people-group.svg';
import UserGear from '../../assets/icon/user-gear.svg';
import TimeForward from '../../assets/icon/time-forward.svg';
import Pathf from '../../assets/icon/pathf.svg';
import Bullseye from '../../assets/icon/bullseye.svg';
import Image from 'next/image';
import { SheduleTable } from './shedule-table';

interface Props {
  className?: string;
}

export const AboutUs: React.FC<Props> = () => {
  return (
    <Container>
      <Title text="Биз жөнүндө" size="lg" className="text-center mt-24 mb-16 font-semibold" />
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex center size-5 font-semibold w-72">
              <Image className="mr-6" src={PeopleGroup} alt="" />
              Долбоор тууралуу
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Разработка эффективного решения за максимально короткие сроки по самым доступным и
            конкурентным в странах СНГ ценам.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <div className="flex center size-5 font-semibold w-96">
              <Image className="mr-6" src={Bullseye} alt="" />
              Долбоордун максаттары жана милдеттери
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Разработка эффективного решения за максимально короткие сроки по самым доступным и
            конкурентным в странах СНГ ценам.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            <div className="flex center size-5 font-semibold w-72">
              <Image className="mr-6" src={Pathf} alt="" />
              Стажировканын багыттары:
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Разработка эффективного решения за максимально короткие сроки по самым доступным и
            конкурентным в странах СНГ ценам.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            <div className="flex center size-5 font-semibold w-96">
              <Image className="mr-6" src={UserGear} alt="" />
              Кандидаттарды тандап алууга талаптар
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Разработка эффективного решения за максимально короткие сроки по самым доступным и
            конкурентным в странах СНГ ценам.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            <div className="flex center size-5 font-semibold w-96">
              <Image className="mr-6" src={TimeForward} alt="" />
              Стажировка өтүүнүн форматы жана убактысы
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Разработка эффективного решения за максимально короткие сроки по самым доступным и
            конкурентным в странах СНГ ценам.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <SheduleTable className="mt-12 max-w-4xl m-auto" />
    </Container>
  );
};
