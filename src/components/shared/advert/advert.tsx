"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Close23 from "/public/assets/image/close24.png";

interface Props {
  className?: string;
}

const advers = [
  {
    id: 1,
    name: "Techjol",
    title: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, molestiae iure nihil adipisci temporibus deleniti, asperiores illo iste laudantium eos esse facilis excepturi et maxime deserunt distinctio quam? Impedit, voluptatibus!`,
    data: "21.09.2020",
  },
  {
    id: 2,
    name: "Techjol",
    title: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, molestiae iure nihil adipisci temporibus delenити, asperiores illo iste laudantium eos esse facilis excepturi et maxime deserunt distinctio quam? Impedit, voluptatibus!`,
    data: "21.09.2020",
  },
];

export const Advert: React.FC<Props> = ({ className }) => {
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentAdver, setCurrentAdver] = useState<(typeof advers)[0] | null>(
    null
  );

  const handleShowMore = (adver: (typeof advers)[0]) => {
    router.push(`/advert/${adver.id}`);
  };

  return (
    <div className={`items-center justify-center mb-10 mt-10 p-5 ${className}`}>
      <p className=" text-2xl sm:text-5xl sm:pb-10 items-center justify-center flex">
        Кулактандыруу
      </p>
      <div className="sm:space-y-6">
        {advers.map((adver) => (
          <div
            key={adver.id}
            onClick={() => handleShowMore(adver)}
            className="flex gap-2 cursor-pointer justify-between items-center w-full max-w-[1240px] mx-auto p-6 bg-white rounded-lg sm:shadow-none sm:hover:shadow-none lg:shadow-lg lg:hover:shadow-xl"
          >
            <div className="sm:flex items-center gap-5 justify-center lg:gap-20">
              <p className="font-semibold text-xs sm:text-2xl">{adver.name}</p>
              <h3 className="text-gray-700 text-xs sm:text-2xl">
                {adver.title.length > 50
                  ? `${adver.title.slice(0, 50)}...`
                  : adver.title}
              </h3>
            </div>
            <p className="text-gray-500 text-xs sm:text-2xl">{adver.data}</p>
          </div>
        ))}
      </div>

      {isModalOpen && currentAdver && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="sm:bg-white pt-7 pr-10 pl-10 pb-5 sm:rounded-lg sm:shadow-lg sm:shadow-slate-950 w-[80%] max-w-lg">
            <div className="justify-end flex">
              <button
                onClick={() => setModalOpen(false)}
                className="text-blue-500 underline mt-4"
              >
                <Image src={Close23} alt="close" width={34} height={34} />
              </button>
            </div>
            <div className="flex gap-10 sm:gap-14 pb-5 justify-items-start">
              <p className="text-gray-500 text-sx sm:text-lg ">
                {currentAdver.data}
              </p>
              <p className="font-semibold text-xl sm:text-3xl">
                {currentAdver.name}
              </p>
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
