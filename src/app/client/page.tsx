"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Avatar } from "@/components/ui/avatar";
import Modal from "./[id]/page";
import Close from "/public/assets/icon/delete7.svg";
import East from "/public/assets/icon/east.svg";

interface Props {
  className?: string;
}

const tasktraker = [
  {
    id: 1,
    number: 1,
    name: "lorem Lorem Ipsum text lorem...",
    data: "20.09.2024",
  },
  {
    id: 2,
    number: 2,
    name: "lorem Lorem Ipsum text lorem...",
    data: "20.09.2024",
  },
  {
    id: 3,
    number: 3,
    name: "lorem Lorem Ipsum text lorem...",
    data: "20.09.2024",
  },
  {
    id: 4,
    number: 4,
    name: "lorem Lorem Ipsum text lorem...",
    data: "20.09.2024",
  },
  {
    id: 5,
    number: 5,
    name: "lorem Lorem Ipsum text lorem...",
    data: "20.09.2024",
  },
  {
    id: 6,
    number: 6,
    name: "lorem Lorem Ipsum text lorem...",
    data: "20.09.2024",
  },
  {
    id: 7,
    number: 7,
    name: "lorem Lorem Ipsum text lorem...",
    data: "20.09.2024",
  },
  {
    id: 8,
    number: 8,
    name: "lorem Lorem Ipsum text lorem...",
    data: "20.09.2024",
  },
  {
    id: 9,
    number: 9,
    name: "lorem Lorem Ipsum text lorem...",
    data: "20.09.2024",
  },
];

const ITEMS_PER_PAGE = 8;

export const AnnouncePage: React.FC<Props> = ({}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [ismodal, setIsModal] = useState(false);
  const openModal = () => setIsModal(true);
  const closeModal = () => setIsModal(false);

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
            Кулактандыруу
          </p>
          <div className="flex pl-44 justify-end items-end">
            <button
              onClick={openModal}
              className="w-[190px] rounded-sm bg-yellow-600 hover:bg-yellow-500 text-2xl font-semibold h-[50px] flex items-center justify-center"
            >
              Кошуу
            </button>
          </div>
        </div>

        {paginatedData.map((nex) => (
          <div key={nex.id} className="flex space-y-10 items-center space-x-4">
            <div className="flex p-3 mb-10 shadow-md rounded-sm items-center justify-between border w-[924px] h-auto gap-5">
              <div className="flex gap-8 items-center">
                <p className="font-semibold text-2xl">{nex.number}.</p>

                <p className=" text-2xl cursor-pointer">{nex.name}</p>
              </div>
              <div className="flex justify-end items-center gap-10">
                <p className="font-[22px]">{nex.data}</p>
                <div className="cursor-pointer p-2 border shadow-sm">
                  <Image
                    src={East}
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
      <Modal isOpen={isModal} onClose={closeModal}>
        <h2 className="text-2xl font-bold">Добавить элемент</h2>
        <p>Содержимое модального окна</p>
        <button
          onClick={closeModal}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Закрыть
        </button>
      </Modal>
    </div>
  );
};
