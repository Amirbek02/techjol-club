"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Close23 from "/public/assets/image/close24.png";

interface Props {
  className?: string;
}

const PAGE_SIZE = 10;

const advers = [
  {
    id: 1,
    name: "Techjol",
    title: `       Кулактандыруу Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique quisquam qui veritatis animi esse! Eos, esse minus molestiae ab ullam ad, aut ut in omnis consequatur eveniet numquam illum vero.
 "`,
    data: "21.09.2020",
  },
  {
    id: 2,
    name: "Techjol",
    title: `       Кулактандыруу Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique quisquam qui veritatis animi esse! Eos, esse minus molestiae ab ullam ad, aut ut in omnis consequatur eveniet numquam illum vero.
    "`,
    data: "21.09.2020",
  },
  {
    id: 3,
    name: "Techjol",
    title: `       Кулактандыруу Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique quisquam qui veritatis animi esse! Eos, esse minus molestiae ab ullam ad, aut ut in omnis consequatur eveniet numquam illum vero.
    "`,
    data: "21.09.2020",
  },
  {
    id: 4,
    name: "Techjol",
    title: `       Кулактандыруу Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique quisquam qui veritatis animi esse! Eos, esse minus molestiae ab ullam ad, aut ut in omnis consequatur eveniet numquam illum vero.
    "`,
    data: "21.09.2020",
  },
  {
    id: 5,
    name: "Techjol",
    title: `       Кулактандыруу Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique quisquam qui veritatis animi esse! Eos, esse minus molestiae ab ullam ad, aut ut in omnis consequatur eveniet numquam illum vero.
    "`,
    data: "21.09.2020",
  },
  {
    id: 6,
    name: "Techjol",
    title: "Lorem ipsum dolor sit amet...",
    data: "21.09.2020",
  },
];

export const Advert: React.FC<Props> = ({ className }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentAdver, setCurrentAdver] = useState<(typeof advers)[0] | null>(
    null
  );

  const totalPages = Math.ceil(advers.length / PAGE_SIZE);

  const paginatedAdvers = advers.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const handleShowMore = (adver: (typeof advers)[0]) => {
    setCurrentAdver(adver);
    setModalOpen(true);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={`items-center justify-center mb-10 p-5 ${className}`}>
      <p className="text-2xl sm:text-5xl sm:pb-10 items-center justify-center flex">
        Кулактандыруу
      </p>
      <div className="sm:space-y-6">
        {paginatedAdvers.map((adver) => (
          <div
            key={adver.id}
            className="flex gap-2 cursor-pointer justify-between items-center max-h-[60px] w-full max-w-[1240px] mx-auto p-6 bg-white rounded-lg sm:shadow-none sm:hover:shadow-none lg:shadow-lg lg:hover:shadow-xl"
          >
            <div
              onClick={() => handleShowMore(adver)}
              className="sm:flex items-center gap-5 justify-center lg:gap-20"
            >
              <p className="font-semibold text-xs sm:text-2xl">{adver.name}</p>
              <h3 className="text-gray-700 text-xs flex sm:text-2xl">
                {adver.title.length > 50
                  ? `${adver.title.slice(0, 50)}...`
                  : adver.title}
                <p className="hidden sm:block">подробнее</p>
                <Link
                  href={`/client/${adver.id}`}
                  className="text-nowrap block sm:hidden font-sans"
                >
                  подробнее
                </Link>
              </h3>
            </div>
            <div className="relative group">
              <p className="text-gray-500 text-xs sm:text-2xl group-hover:hidden">
                {adver.data}
              </p>
              <div className="hidden sm:group-hover:flex items-center">
                <div className="pr-14">
                  <Image
                    src="/assets/icon/basket.svg"
                    alt="img"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="">
                  <Image
                    src="/assets/icon/delete.svg"
                    alt="img"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center">
        <div className="flex border p-1 pr-4 pl-4 rounded-sm w-auto  items-center justify-center mt-6 space-x-2">
          <button
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
            className={`p-1 rounded-md ${
              currentPage === 1
                ? "text-gray-400 cursor-not-allowed"
                : "text-blue-600"
            }`}
          >
            &laquo;
          </button>

          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`p-2 rounded-md ${
                  page === currentPage
                    ? "bg-blue-900 text-white font-bold"
                    : "text-blue-600"
                }`}
              >
                {page}
              </button>
            )
          )}

          <button
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-md ${
              currentPage === totalPages
                ? "text-gray-400 cursor-not-allowed"
                : "text-blue-600"
            }`}
          >
            &raquo;
          </button>
        </div>
      </div>

      {isModalOpen && currentAdver && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="sm:bg-white max-w-[767px] max-h-[730px] pr-10 pl-10 pb-5 sm:rounded-lg sm:shadow-lg sm:shadow-slate-950">
            <div className="justify-end flex">
              <button
                onClick={() => setModalOpen(false)}
                className="text-blue-500 underline mt-4"
              >
                <Image src={Close23} alt="close" width={34} height={34} />
              </button>
            </div>
            <div className="">
              <div className="flex-none">
                <p className="text-gray-500 text-sx sm:text-lg">
                  {currentAdver.data}
                </p>
              </div>
              <div className="flex-auto pb-4">
                <p className="font-semibold text-center text-xl sm:text-3xl">
                  {currentAdver.name}
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-gray-700">{currentAdver.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
