"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Mentor from "/public/assets/icon/pensile7.svg";
import Close from "/public/assets/icon/delete7.svg";
import East from "/public/assets/icon/east.svg";
import Free from "/public/assets/icon/free.svg";

interface Props {
  className?: string;
}

const tasktraker = [
  { id: 1, number: 1, name: "Амираев Амирбек" },
  { id: 2, number: 2, name: "Амираев Амирбек" },
  { id: 3, number: 3, name: "Амираев Амирбек" },
  { id: 4, number: 4, name: "Амираев Амирбек" },
  { id: 5, number: 5, name: "Амираев Амирбек" },
  { id: 6, number: 6, name: "Амираев Амирбек" },
  { id: 7, number: 7, name: "Амираев Амирбек" },
  { id: 8, number: 8, name: "Амираев Амирбек" },
  { id: 9, number: 9, name: "Амираев Амирбек" },
];

const ITEMS_PER_PAGE = 8;

export const RewiewsPage: React.FC<Props> = ({}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(tasktraker.length / ITEMS_PER_PAGE);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedData = tasktraker.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="w-[1045px] p-20">
      <div>
        <div className="flex items-center mb-10 justify-end">
          <p className="font-semibold items-center justify-center flex text-4xl">
            Пикирлер
          </p>
          <div className="flex pl-44 justify-end items-end">
            <Link
              href="/form"
              className="w-[190px] rounded-sm bg-yellow-600 hover:bg-yellow-500 text-2xl font-semibold h-[50px] flex items-center justify-center"
            >
              Кошуу
            </Link>
          </div>
        </div>

        {paginatedData.map((nex) => (
          <div key={nex.id} className="flex space-y-10 items-center space-x-4">
            <div className="flex p-3 mb-10 shadow-md rounded-sm items-center justify-between border w-[924px] h-auto gap-5">
              <div className="flex gap-8 items-center">
                <p className="font-semibold text-2xl">{nex.number}.</p>
                <p className="font-semibold text-2xl cursor-pointer">
                  {nex.name}
                </p>
              </div>
              <div className="flex justify-end items-center gap-10">
                <div className="cursor-pointer p-2 border shadow-sm">
                  <Image
                    src={East}
                    alt="img"
                    className="rounded-full w-[24px] h-[24px]"
                  />
                </div>
                <div className="border p-2 shadow-sm cursor-pointer">
                  <Image src={Free} alt="img" className="w-[24px] h-[24px]" />
                </div>
                <div className="cursor-pointer p-2 border shadow-sm">
                  <Image
                    src={Mentor}
                    alt="img"
                    className="rounded-full w-[24px] h-[24px]"
                  />
                </div>
                <div className="border p-2 shadow-sm cursor-pointer">
                  <Image src={Close} alt="img" className="w-[24px] h-[24px]" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-4 gap-2">
        <button
          className={`px-3 py-1 border rounded ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          {"<<"}
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`px-3 py-1 border rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white font-bold"
                : ""
            }`}
            onClick={() => goToPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className={`px-3 py-1 border rounded ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          {">>"}
        </button>
      </div>
    </div>
  );
};
