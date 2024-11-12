import React from "react";
import Image from "next/image";
import Image1 from "/public/assets/image/image.png";

type Props = {};

export default function Internship({}: Props) {
  return (
    <div className="flex flex-wrap  items-center font-semibold m-5  justify-center gap-10">
      <div className="p-5 justify-center   sm:justify-start">
        <h1 className="text-3xl sm:text-5xl lg:text-7xl  mt-20">
          TECH <span className="text-yellow-600">JOL</span>
        </h1>
        <p className="py-4 text-2xl sm:text-4xl text-gray-400">
          акысыз IT стажировка
        </p>

        <h5 className="text-2xl py-5 font-extralight w-full sm:w-96 md:w-[500px]">
          Разработка эффективного решения за максимально короткие сроки по самым
          доступным и конкурентным в странах СНГ ценам.
        </h5>
        <div className="flex justify-center sm:justify-start">
          <button
            style={{
              backgroundColor: "#031634",
              padding: "10px 29px",
            }}
            className="text-white  rounded-sm"
          >
            Tech Jolго кошулуу
          </button>
        </div>
      </div>
      <div className="hidden  sm:block">
        <Image width={827} src={Image1} alt="img" />
      </div>
    </div>
  );
}
