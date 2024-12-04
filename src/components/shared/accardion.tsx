'use client';
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function accardion() {
  return (
    <div
      style={{
        backgroundColor: '#031634',
      }}
      className="rounded-none sm:rounded-md m-0 sm:m-10 p-10">
      <p className="text-2xl pb-7 text-white sm:text-4xl ">Стажировка кандай өтөт?</p>
      <Accordion type="single" collapsible className="w-full space-y-4 ">
        <AccordionItem className="bg-white  rounded-sm px-1" value="item-1">
          <AccordionTrigger className="sm:px-10 text-wrap   px-0 font-bold gap-4 sm:gap-10 text sm:text-2xl">
            Получаешь теоретические знания
          </AccordionTrigger>
          <AccordionContent className=" text-xs sm:text-lg font-light  sm:pl-28  pl-8">
            После каждой живой лекции тебя ждет обязательная минимальная домашняя работа, и бонусные
            практические задания.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="bg-white rounded-sm px-1" value="item-2">
          <AccordionTrigger className="text sm:px-10 px-0  gap-4 sm:gap-10  font-bold sm:text-2xl">
            Получаешь теоретические знания
          </AccordionTrigger>
          <AccordionContent className="text-xs sm:text-lg font-light sm:pl-28 pl-8">
            После каждой живой лекции тебя ждет обязательная минимальная домашняя работа, и бонусные
            практические задания.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="bg-white rounded-sm px-1" value="item-3">
          <AccordionTrigger className="  sm:px-10 px-0 gap-4 sm:gap-10 font-bold text sm:text-2xl">
            Получаешь теоретические знания
          </AccordionTrigger>
          <AccordionContent className="text-xs sm:text-lg font-light  sm:pl-28 pl-8 ">
            После каждой живой лекции тебя ждет обязательная минимальная домашняя работа, и бонусные
            практические задания.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
