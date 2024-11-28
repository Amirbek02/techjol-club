"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

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

const ClientDetail = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const adver = advers.find((item) => item.id === parseInt(params.id, 10));

  if (!adver) {
    return <div>Клиент не найден</div>;
  }

  return (
    <div className="p-4 pt-6">
      <div className="flex justify-between">
        <Image
          className="cursor-pointer"
          src="/assets/icon/strelka.svg"
          alt="img"
          width={24}
          height={24}
        />
        <div className="flex space-x-12">
          <Image
            className="cursor-pointer"
            src="/assets/icon/basket.svg"
            alt="img"
            width={19}
            height={23}
          />
          <Image
            className="cursor-pointer"
            src="/assets/icon/delete.svg"
            alt="img"
            width={17}
            height={19}
          />
        </div>
      </div>

      <h1 className="text-2xl pt-4 pb-4 flex items-center justify-center font-semibold">
        {adver.name}
      </h1>
      <p className="text-[18px]">{adver.title}</p>
    </div>
  );
};

export default ClientDetail;
