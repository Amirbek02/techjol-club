"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Imafer from "/public/assets/image/partners2.png";
import Imafer1 from "/public/assets/image/portners1.png";
import Imafer2 from "/public/assets/image/partners4.png";
import Imafer3 from "/public/assets/image/partners3.png";

const Partners = () => {
  const certificates = [
    { id: 1, image: Imafer2 },
    { id: 2, image: Imafer3 },
    { id: 3, image: Imafer },
    { id: 4, image: Imafer1 },
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
      <div>
        <h1 className="text-3xl font-bold text-center mb-4">Өнөктөштөр</h1>
      </div>

      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-24 p-20">
            {certificates.map((cert) => (
              <div key={cert.id} className="flex-[0_0_0] px-2 ">
                <Image
                  src={cert.image}
                  alt={`Partner ${cert.id}`}
                  className="max-w-[350px]  max-h-[255px]   mx-auto"
                  width={300}
                  height={365}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          className="absolute left-0 top-1/2 mr-10 transform -translate-y-1/2 text-gray-600 bg-white rounded-full p-2 shadow-lg"
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

export default Partners;
