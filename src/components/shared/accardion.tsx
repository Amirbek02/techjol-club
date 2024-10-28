"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {};

export default function accardion({}: Props) {
  return (
    <div
      style={{
        backgroundColor: "#031634",
      }}
      className="rounded-none sm:rounded-md m-0 sm:m-10 p-10"
    >
      <p className="text-2xl pb-7 text-white sm:text-4xl ">
        Стажировка кандай өтөт?
      </p>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem className="bg-white rounded-sm px-2" value="item-1">
          <AccordionTrigger className="sm:px-10 px-0 font-semibold gap-4 sm:gap-10 text-x sm:text-2xl">
            Получаешь теоретические знания
          </AccordionTrigger>
          <AccordionContent className="text-x sm:px-24 px-8">
            После каждой живой лекции тебя ждет обязательная минимальная
            домашняя работа, и бонусные практические задания.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          className="bg-white rounded-sm px-2  my-4"
          value="item-2"
        >
          <AccordionTrigger className="text-x sm:px-10 px-0  gap-4 sm:gap-10 font-semibold sm:text-2xl">
            Получаешь теоретические знания
          </AccordionTrigger>
          <AccordionContent className="sm:px-24 px-8">
            После каждой живой лекции тебя ждет обязательная минимальная
            домашняя работа, и бонусные практические задания.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="bg-white rounded-sm px-2" value="item-3">
          <AccordionTrigger className="sm:px-10 px-0 gap-4 sm:gap-10 font-semibold text-x sm:text-2xl">
            Получаешь теоретические знания
          </AccordionTrigger>
          <AccordionContent className="sm:px-24 px-8">
            После каждой живой лекции тебя ждет обязательная минимальная
            домашняя работа, и бонусные практические задания.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
