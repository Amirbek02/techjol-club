"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Imafer from "/public/assets/image/mentor1.png";
import Imafer1 from "/public/assets/image/portners1.png";
import Imafer2 from "/public/assets/image/partners4.png";
import Imafer3 from "/public/assets/image/partners3.png";

const Mentors = () => {
  const certificates = [
    {
      id: 1,
      image: Imafer,
      title: "Амирбек Амираев",
      descr: "Frontend Developer",
    },
    {
      id: 2,
      image: Imafer,
      title: "Амирбек Амираев",
      descr: "Frontend Developer",
    },
    {
      id: 3,
      image: Imafer,
      title: "Амирбек Амираев",
      descr: "Frontend Developer",
    },
    {
      id: 4,
      image: Imafer,
      title: "Амирбек Амираев",
      descr: "Frontend Developer",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="container max-w-[1240px] mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-4">Өнөктөштөр</h1>

      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-20 m-20">
            {certificates.map((cert) => (
              <div key={cert.id} className="flex flex-col items-center">
                <Image
                  src={cert.image}
                  alt={`Mentor ${cert.title} , ${cert.descr}`}
                  className="max-w-[350px] h-full object-cover mx-auto"
                  width={300}
                  height={365}
                />
                <p className="mt-2 text-center text-lg font-semibold">
                  {cert.title}
                </p>
                <p className="mt-2 text-center text-lg font-semibold">
                  {cert.descr}
                </p>
              </div>
            ))}
          </div>
        </div>

        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-600 bg-white rounded-full p-2 shadow-lg"
          onClick={scrollPrev}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="rgb(0, 128, 128)"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-600 bg-white rounded-full p-2 shadow-lg"
          onClick={scrollNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="rgb(0, 128, 128)"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Mentors;
